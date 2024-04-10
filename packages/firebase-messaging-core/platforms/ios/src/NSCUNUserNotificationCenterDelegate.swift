import Foundation
import UIKit
import NSCFirebaseMessagingCore

struct OriginalDelegateRespondsTo {
    var willPresentNotification: Bool
    var didReceiveNotificationResponse:Bool
    var openSettingsForNotification: Bool
}


@available(iOS 10.0, *)
@objc(NSCUNUserNotificationCenterDelegate)
public class NSCUNUserNotificationCenterDelegate: NSObject, UNUserNotificationCenterDelegate {
    
    static var notificationCenterDelegateObserving = false
    
    static var originalNotificationCenterDelegate: UNUserNotificationCenterDelegate? = nil
    
    static var originalDelegateRespondsTo = OriginalDelegateRespondsTo(willPresentNotification: false, didReceiveNotificationResponse: false, openSettingsForNotification: false)
    
    public static let sharedInstance = NSCUNUserNotificationCenterDelegate()
    
    public func observe(){
        if(!NSCUNUserNotificationCenterDelegate.notificationCenterDelegateObserving){
            let center = UNUserNotificationCenter.current()
            if (center.delegate != nil) {
                NSCUNUserNotificationCenterDelegate.originalNotificationCenterDelegate = center.delegate
                if #available(iOS 12.0, *) {
                    NSCUNUserNotificationCenterDelegate.originalDelegateRespondsTo.openSettingsForNotification = NSCUNUserNotificationCenterDelegate.originalNotificationCenterDelegate!.responds(to: #selector(UNUserNotificationCenterDelegate.userNotificationCenter(_:openSettingsFor:)))
                }
                
                NSCUNUserNotificationCenterDelegate.originalDelegateRespondsTo.willPresentNotification = NSCUNUserNotificationCenterDelegate.originalNotificationCenterDelegate!.responds(to: #selector(UNUserNotificationCenterDelegate.userNotificationCenter(_:willPresent:withCompletionHandler:)))
                
                NSCUNUserNotificationCenterDelegate.originalDelegateRespondsTo.didReceiveNotificationResponse = NSCUNUserNotificationCenterDelegate.originalNotificationCenterDelegate!.responds(to: #selector(UNUserNotificationCenterDelegate.userNotificationCenter(_:didReceive:withCompletionHandler:)))
            }
            center.delegate = NSCUNUserNotificationCenterDelegate.sharedInstance
            NSCUNUserNotificationCenterDelegate.notificationCenterDelegateObserving = true
        }
    }
    
    
    public func userNotificationCenter(_ center: UNUserNotificationCenter, openSettingsFor notification: UNNotification?) {
        if ((NSCUNUserNotificationCenterDelegate.originalNotificationCenterDelegate != nil) && NSCUNUserNotificationCenterDelegate.originalDelegateRespondsTo.openSettingsForNotification) {
            if #available(iOS 12.0, *) {
                NSCUNUserNotificationCenterDelegate.originalNotificationCenterDelegate?.userNotificationCenter?(center, openSettingsFor: notification)
            }
        }
    }
    
    public func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {
        let remoteNotification = response.notification.request.content.userInfo
        if (remoteNotification["gcm.message_id"] != nil) {
            var message = parseNotification(response.notification)
            message["foreground"] = UIApplication.shared.applicationState == UIApplication.State.active
            NSCFirebaseMessagingCore.onNotificationTapCallback?(message) {
                completionHandler()
            }
        }else {
            if((response.notification.request.trigger as? UNPushNotificationTrigger) != nil){
                var message = remoteNotification
                message["foreground"] = UIApplication.shared.applicationState == UIApplication.State.active
                NSCFirebaseMessagingCore.onNotificationTapCallback?(message) {
                    completionHandler()
                }
            }
        }
        
        if (NSCUNUserNotificationCenterDelegate.originalNotificationCenterDelegate != nil && NSCUNUserNotificationCenterDelegate.originalDelegateRespondsTo.didReceiveNotificationResponse) {
            NSCUNUserNotificationCenterDelegate.originalNotificationCenterDelegate?.userNotificationCenter?(center, didReceive: response, withCompletionHandler: completionHandler)
        } else {
            completionHandler()
        }
    }
    
    public func userNotificationCenter(_ center: UNUserNotificationCenter, willPresent notification: UNNotification, withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void) {
        var options = UNNotificationPresentationOptions(rawValue: 0)
        
        let aps = notification.request.content.userInfo["aps"] as? NSDictionary
        
        if (NSCFirebaseMessagingCore.showNotificationsWhenInForeground || notification.request.content.userInfo["gcm.notification.showWhenInForeground"] as? String == "true" || notification.request.content.userInfo["showWhenInForeground"] as? Bool ?? false ||
            aps != nil && aps?["showWhenInForeground"] as? Bool ?? false) {
            options = UNNotificationPresentationOptions(rawValue: UNNotificationPresentationOptions.alert.rawValue | UNNotificationPresentationOptions.sound.rawValue | UNNotificationPresentationOptions.badge.rawValue )
        }
        
        if (notification.request.content.userInfo["gcm.message_id"] != nil) {
            var message = parseNotification(notification)
            if (message["contentAvailable"] == nil) {
                NSCFirebaseMessagingCore.onMessageCallback?(message) {
                    completionHandler(options)
                }
                message["foreground"] = UIApplication.shared.applicationState == UIApplication.State.active
            } else {
                completionHandler(options)
            }
            return
        }else {
            if((notification.request.trigger as? UNPushNotificationTrigger) != nil){
                
                var message = notification.request.content.userInfo
                message["foreground"] = UIApplication.shared.applicationState == UIApplication.State.active
                NSCFirebaseMessagingCore.onMessageCallback?(message) {
                    completionHandler(options)
                }
                return
            }
        }
        
        if (NSCUNUserNotificationCenterDelegate.originalNotificationCenterDelegate != nil && NSCUNUserNotificationCenterDelegate.originalDelegateRespondsTo.willPresentNotification) {
            NSCUNUserNotificationCenterDelegate.originalNotificationCenterDelegate?.userNotificationCenter?(center, willPresent: notification, withCompletionHandler: completionHandler)
        } else {
            completionHandler(options)
        }
    }
    
}
