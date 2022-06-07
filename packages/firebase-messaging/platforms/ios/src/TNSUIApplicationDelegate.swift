import Foundation
import UIKit
import GoogleUtilities
import FirebaseMessaging
#if canImport(FirebaseAuth)
import FirebaseAuth
#endif
import TNSFirebaseMessaging

@objc(TNSUIApplicationDelegate)
public class TNSUIApplicationDelegate: UIResponder , UIApplicationDelegate {
    
    public static let sharedInstance: TNSUIApplicationDelegate = TNSUIApplicationDelegate()
    
    public func observe(){
        GULAppDelegateSwizzler.registerAppDelegateInterceptor(TNSUIApplicationDelegate.sharedInstance)
        GULAppDelegateSwizzler.proxyOriginalDelegateIncludingAPNSMethods()
        
        guard GULAppDelegateSwizzler.sharedApplication()?.delegate != nil else {
            return
        }
        
        let selector = #selector((TNSUIApplicationDelegate).application(_:didReceiveRemoteNotification:fetchCompletionHandler:))
        if (!(GULAppDelegateSwizzler.sharedApplication()!.delegate!.responds(to: selector))) {
            
            
            let method = class_getInstanceMethod(
                object_getClass(TNSUIApplicationDelegate.sharedInstance),
                selector
            );
            
            guard method != nil else {
                return
            }
            
            class_addMethod(
                object_getClass(
                    GULAppDelegateSwizzler.sharedApplication()!.delegate
                ), selector,
                method_getImplementation(method!),
                method_getTypeEncoding(method!)
            );
        }
        
        
        
        let tokenSelector = #selector(TNSUIApplicationDelegate.application(_:didRegisterForRemoteNotificationsWithDeviceToken:))
        if (!(GULAppDelegateSwizzler.sharedApplication()!.delegate!.responds(to: tokenSelector))) {
            
            
            let method = class_getInstanceMethod(
                object_getClass(TNSUIApplicationDelegate.sharedInstance),
                tokenSelector
            );
            
            guard method != nil else {
                return
            }
            
            class_addMethod(
                object_getClass(
                    GULAppDelegateSwizzler.sharedApplication()!.delegate
                ), tokenSelector,
                method_getImplementation(method!),
                method_getTypeEncoding(method!)
            );
        }
        
        
        let urlHandlingSelector = #selector(TNSUIApplicationDelegate.application(_:open:options:))
        if (!(GULAppDelegateSwizzler.sharedApplication()!.delegate!.responds(to: urlHandlingSelector))) {
            
            
            let method = class_getInstanceMethod(
                object_getClass(TNSUIApplicationDelegate.sharedInstance),
                urlHandlingSelector
            );
            
            guard method != nil else {
                return
            }
            
            class_addMethod(
                object_getClass(
                    GULAppDelegateSwizzler.sharedApplication()!.delegate
                ), urlHandlingSelector,
                method_getImplementation(method!),
                method_getTypeEncoding(method!)
            );
        }
        
    }
    
    
    @objc public func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
        var result = false
        #if canImport(FirebaseAuth)
        result = Auth.auth().canHandle(url)
        #endif
        return result
    }
    
    
    @objc public func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
        TNSFirebaseMessaging.registerDeviceForRemoteMessagesCallback?(false,error as NSError)
        TNSFirebaseMessaging.registerDeviceForRemoteMessagesCallback = nil
    }
    
    @objc public func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
        Messaging.messaging().apnsToken = deviceToken
        UserDefaults.standard.set(true, forKey: TNSNotificationHelper.REMOTE_NOTIFICATIONS_REGISTRATION_STATUS)
        TNSFirebaseMessaging.registerDeviceForRemoteMessagesCallback?(UIApplication.shared.isRegisteredForRemoteNotifications, nil)
        TNSFirebaseMessaging.registerDeviceForRemoteMessagesCallback = nil
    }
    
    @objc public func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
#if canImport(FirebaseAuth)
        if(Auth.auth().canHandleNotification(userInfo)){
            completionHandler(.noData)
            return
        }
#endif
        
        var message = parseRemoteMessage(userInfo)
        message["foreground"] = application.applicationState == UIApplication.State.active
        TNSFirebaseMessaging.onMessageCallback?(message)
        completionHandler(.newData)
        
    }
    
}
