import Foundation
import UIKit
import FirebaseMessaging
import TNSFirebaseMessaging

struct OriginalDelegateRespondsTo {
    var willPresentNotification: Bool
    var didReceiveNotificationResponse:Bool
    var openSettingsForNotification: Bool
}


@available(iOS 10.0, *)
@objc(TNSUNUserNotificationCenterDelegate)
public class TNSUNUserNotificationCenterDelegate: NSObject, UNUserNotificationCenterDelegate {
    
    static var notificationCenterDelegateObserving = false
    
    static var originalNotificationCenterDelegate: UNUserNotificationCenterDelegate? = nil
    
    static var originalDelegateRespondsTo = OriginalDelegateRespondsTo(willPresentNotification: false, didReceiveNotificationResponse: false, openSettingsForNotification: false)
    
    public static let sharedInstance = TNSUNUserNotificationCenterDelegate()
    
    public func observe(){
        if(!TNSUNUserNotificationCenterDelegate.notificationCenterDelegateObserving){
            let center = UNUserNotificationCenter.current()
            if (center.delegate != nil) {
                TNSUNUserNotificationCenterDelegate.originalNotificationCenterDelegate = center.delegate
                if #available(iOS 12.0, *) {
                    TNSUNUserNotificationCenterDelegate.originalDelegateRespondsTo.openSettingsForNotification = TNSUNUserNotificationCenterDelegate.originalNotificationCenterDelegate!.responds(to: #selector(UNUserNotificationCenterDelegate.userNotificationCenter(_:openSettingsFor:)))
                }
                
                TNSUNUserNotificationCenterDelegate.originalDelegateRespondsTo.willPresentNotification = TNSUNUserNotificationCenterDelegate.originalNotificationCenterDelegate!.responds(to: #selector(UNUserNotificationCenterDelegate.userNotificationCenter(_:willPresent:withCompletionHandler:)))
                
                TNSUNUserNotificationCenterDelegate.originalDelegateRespondsTo.didReceiveNotificationResponse = TNSUNUserNotificationCenterDelegate.originalNotificationCenterDelegate!.responds(to: #selector(UNUserNotificationCenterDelegate.userNotificationCenter(_:didReceive:withCompletionHandler:)))
            }
            center.delegate = TNSUNUserNotificationCenterDelegate.sharedInstance
            TNSUNUserNotificationCenterDelegate.notificationCenterDelegateObserving = true
        }
    }
    
    
    public func userNotificationCenter(_ center: UNUserNotificationCenter, openSettingsFor notification: UNNotification?) {
        if ((TNSUNUserNotificationCenterDelegate.originalNotificationCenterDelegate != nil) && TNSUNUserNotificationCenterDelegate.originalDelegateRespondsTo.openSettingsForNotification) {
            if #available(iOS 12.0, *) {
                TNSUNUserNotificationCenterDelegate.originalNotificationCenterDelegate?.userNotificationCenter?(center, openSettingsFor: notification)
            }
        }
    }
    
    public func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {
        let remoteNotification = response.notification.request.content.userInfo
        if (remoteNotification["gcm.message_id"] != nil) {
            var message = parseNotification(response.notification)
            message["foreground"] = UIApplication.shared.applicationState == UIApplication.State.active
            TNSFirebaseMessaging.onNotificationTapCallback?(message)
        }
        
        if (TNSUNUserNotificationCenterDelegate.originalNotificationCenterDelegate != nil && TNSUNUserNotificationCenterDelegate.originalDelegateRespondsTo.didReceiveNotificationResponse) {
            TNSUNUserNotificationCenterDelegate.originalNotificationCenterDelegate?.userNotificationCenter?(center, didReceive: response, withCompletionHandler: completionHandler)
        } else {
            completionHandler()
        }
    }
    
    public func userNotificationCenter(_ center: UNUserNotificationCenter, willPresent notification: UNNotification, withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void) {
        var options = UNNotificationPresentationOptions(rawValue: 0)
        
        //Messaging.messaging().appDidReceiveMessage(notification.request.content.userInfo)
        
        let aps = notification.request.content.userInfo["aps"] as? NSDictionary
        
        if (TNSFirebaseMessaging.showNotificationsWhenInForeground || notification.request.content.userInfo["gcm.notification.showWhenInForeground"] as? String == "true" || notification.request.content.userInfo["showWhenInForeground"] as? Bool ?? false ||
            aps != nil && aps?["showWhenInForeground"] as? Bool ?? false) {
            options = UNNotificationPresentationOptions(rawValue: UNNotificationPresentationOptions.alert.rawValue | UNNotificationPresentationOptions.sound.rawValue | UNNotificationPresentationOptions.badge.rawValue )
        }
        
        if (notification.request.content.userInfo["gcm.message_id"] != nil) {
            var message = parseNotification(notification)
            if (message["contentAvailable"] == nil) {
                TNSFirebaseMessaging.onMessageCallback?(message)
                message["foreground"] = UIApplication.shared.applicationState == UIApplication.State.active
            }
            completionHandler(options)
        }
        
        if (TNSUNUserNotificationCenterDelegate.originalNotificationCenterDelegate != nil && TNSUNUserNotificationCenterDelegate.originalDelegateRespondsTo.willPresentNotification) {
            TNSUNUserNotificationCenterDelegate.originalNotificationCenterDelegate?.userNotificationCenter?(center, willPresent: notification, withCompletionHandler: completionHandler)
        } else {
            completionHandler(options)
        }
    }
    
}
