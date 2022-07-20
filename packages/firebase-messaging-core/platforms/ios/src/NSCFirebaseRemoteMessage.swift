import Foundation
import UIKit

enum NSCFirebaseNotificationAndroidVisibility: Int, Codable {
    typealias RawValue = Int
    
    case VISIBILITY_PRIVATE
    case VISIBILITY_PUBLIC
    case VISIBILITY_SECRET
}

enum NSCFirebaseNotificationAndroidPriority: Int, Codable {
    typealias RawValue = Int
    
    case PRIORITY_DEFAULT
    case PRIORITY_HIGH
    case PRIORITY_LOW
    case PRIORITY_MAX
    case PRIORITY_MIN
}

class NSCNotificationCriticalSound: Codable {
    
}

struct NSCNotificationIOSCriticalSound: Codable {
    var critical: Bool?
    var name: String
    var volume: Int?
}

struct NSCFirebaseNotificationAndroid: Codable {
    var channelId: String?
    var clickAction: String
    var color: String?
    var count: Int?
    var imageUrl: String?
    var link: String?
    var priority: NSCFirebaseNotificationAndroidPriority
    var smallIcon: String?
    var sound: String?
    var ticker: String
    var visibility: NSCFirebaseNotificationAndroidVisibility
}

struct NSCFirebaseNotificationIOS: Codable {
    var badge: String
    var sound: NSCNotificationCriticalSound?  /* String | NSCNotificationIOSCriticalSound */
    var subtitle: String
    var subtitleLocArgs: Array<String>?
    var subtitleLocKey: String
}

struct NSCFirebaseNotification: Codable {
    var android: NSCFirebaseNotificationAndroid?
    var body: String?
    var bodyLocArgs: Array<String>?
    var bodyLocKey: String?
    var ios:NSCFirebaseNotificationIOS?
    var title: String?
    var titleLocArgs: Array<String>?
    var titleLocKey: String?
}

struct NSCFirebaseRemoteMessage: Codable {
    var category: String?
    var collapseKey: String?
    var contentAvailable: Bool?
    var data: [String: String]?
    var from: String?
    var messageId: String?
    var messageType: String?
    var mutableContent: Bool?
    var notification: NSCFirebaseNotification?
    var sentTime: Int?
    var threadId: String?
    var to: String?
    var ttl: Int?
}

@available(iOS 10.0, *)
func parseNotification(_ notification: UNNotification) -> Dictionary<AnyHashable, Any> {
    return parseRemoteMessage(notification.request.content.userInfo)
}


func parseRemoteMessage(_ remoteMessage:Dictionary<AnyHashable, Any>)-> Dictionary<AnyHashable, Any> {
    var message: [AnyHashable: Any] = [:]
    var data: [AnyHashable: Any] = [:]
    
    var notification: [AnyHashable: Any] = [:]
    var notificationIOS: [AnyHashable: Any] = [:]
    
    for msg in remoteMessage {
        let key = msg.key as? String
        if (key == "gcm.message_id" || key == "google.message_id" || key == "message_id") {
            message["messageId"] = msg.value
            continue;
        }
        
        // message.messageType
        if (key == "message_type") {
            message["messageType"] = msg.value
            continue
        }
        
        
        // message.collapseKey
        if (key == "collapse_key") {
            message["collapseKey"] = msg.value
            continue
        }
        
        // message.from
        if (key == "from") {
            message["from"] = msg.value
            continue
        }
        
        // message.sentTime
        if (key == "google.c.a.ts") {
            message["sentTime"] = msg.value
            continue
        }
        
        // message.to
        if (key == "to" || key == "google.to") {
            message["to"] = msg.value
            continue
        }
        
        // build data dict from remaining keys but skip keys that shouldn't be included in data
        if (key == "aps" || key?.starts(with:"gcm.") ?? false || key?.starts(with:"google.") ?? false) {
            continue;
        }
        
        
        // message.apple.imageUrl
        if (key == "fcm_options") {
            let imageUrl = (msg.value as? NSDictionary)?.object(forKey: "image")
            if (imageUrl != nil) {
                notificationIOS["imageUrl"] = (imageUrl as? URL)?.absoluteString ?? imageUrl
            }
            continue;
        }
        
        if(key != nil){
            data[key!] = msg.value
        }
        
    }
    
    
    message["data"] = data
    
    let apsDict = remoteMessage["aps"] as? NSDictionary
    
    if (apsDict != nil) {
        // message.category
        let category = apsDict?["category"]
        if (category != nil) {
            message["category"] = category
        }
        
        // message.threadId
        let threadId = apsDict?["thread-id"]
        if (threadId != nil) {
            message["threadId"] = threadId
        }
        
        // message.contentAvailable
        let contentAvailable = apsDict?["content-available"]
        if (contentAvailable != nil) {
            message["contentAvailable"] = contentAvailable
        }
        
        // message.mutableContent
        let mutableContent = apsDict?["mutable-content"]
        if (mutableContent != nil) {
            message["mutableContent"] = true
        }
        
        // message.notification.*
        let alert = apsDict?["alert"]
        if (alert != nil) {
            // can be a string or dictionary
            if ((alert as? String) != nil) {
                // message.notification.title
                notification["title"] = alert
            } else if ((alert as? NSDictionary) != nil) {
                let apsAlertDict = alert as? NSDictionary
                
                // message.notification.title
                let title = apsAlertDict?["title"]
                if (title != nil) {
                    notification["title"] = title
                }
                
                // message.notification.titleLocKey
                let titleLocKey = apsAlertDict?["title-loc-key"]
                if (titleLocKey != nil) {
                    notification["titleLocKey"] = titleLocKey
                }
                
                // message.notification.titleLocArgs
                let titleLocArgs = apsAlertDict?["title-loc-args"]
                if (titleLocArgs != nil) {
                    notification["titleLocArgs"] = titleLocArgs
                }
                
                // message.notification.body
                let body = apsAlertDict?["body"]
                if (body != nil) {
                    notification["body"] = body;
                }
                
                // message.notification.bodyLocKey
                let bodyLocKey = apsAlertDict?["loc-key"]
                if (bodyLocKey != nil) {
                    notification["bodyLocKey"] = bodyLocKey
                }
                
                // message.notification.bodyLocArgs
                let bodyLocArgs = apsAlertDict?["loc-args"]
                if (bodyLocArgs != nil) {
                    notification["bodyLocArgs"] = bodyLocArgs
                }
                
                // Apple only
                // message.notification.apple.subtitle
                let subtitle = apsAlertDict?["subtitle"]
                if (subtitle != nil) {
                    notificationIOS["subtitle"] = subtitle
                }
                
                // Apple only
                // message.notification.apple.subtitleLocKey
                let subtitleLocKey = apsAlertDict?["subtitle-loc-key"]
                if (subtitleLocKey != nil) {
                    notificationIOS["subtitleLocKey"] = subtitleLocKey
                }
                
                // Apple only
                // message.notification.apple.subtitleLocArgs
                let subtitleLocArgs = apsAlertDict?["subtitle-loc-args"]
                if (subtitleLocArgs != nil) {
                    notificationIOS["subtitleLocArgs"] = subtitleLocArgs
                }
                
                // Apple only
                // message.notification.apple.badge
                let badge = apsAlertDict?["badge"]
                if (badge != nil) {
                    notificationIOS["badge"] = badge
                }
            }
            
            notification["apple"] = notificationIOS
            message["notification"] = notification
        }
        
        // message.notification.apple.sound
        let sound = apsDict?["sound"]
        if (sound != nil) {
            if ((sound as? String) != nil) {
                // message.notification.apple.sound
                notification["sound"] = [
                    "name": sound,
                    "critical": false,
                    "volume": 1,
                ]
            } else if ((sound as? NSDictionary) != nil) {
                let apsSoundDict = sound as! NSDictionary
                var notificationIOSSound: [AnyHashable: Any] = [:]
                
                // message.notification.apple.sound.name String
                let name = apsSoundDict["name"]
                if (name != nil) {
                    notificationIOSSound["name"] = name
                }
                
                // message.notification.apple.sound.critical Boolean
                let critical = apsSoundDict["critical"]
                if (critical != nil) {
                    notificationIOSSound["critical"] = critical
                }
                
                // message.notification.apple.sound.volume Number
                let volume = apsSoundDict["volume"]
                if (volume != nil) {
                    notificationIOSSound["volume"] = volume
                }
                
                // message.notification.apple.sound
                notificationIOS["sound"] = notificationIOSSound
            }
        }
        
        notification["apple"] = notificationIOS
        message["notification"] = notification
    }
    
    return message
}
