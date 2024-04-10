import Foundation
import UIKit
import GoogleUtilities
#if canImport(FirebaseMessaging)
import FirebaseMessaging
#endif
#if canImport(FirebaseAuth)
import FirebaseAuth
#endif
#if canImport(FirebaseAuthUI)
import FirebaseAuthUI
#endif
import NSCFirebaseMessagingCore

@objc(NSCUIApplicationDelegate)
public class NSCUIApplicationDelegate: UIResponder , UIApplicationDelegate {
    
    public static let sharedInstance = NSCUIApplicationDelegate()
    
    public func observe(){
        GULAppDelegateSwizzler.registerAppDelegateInterceptor(NSCUIApplicationDelegate.sharedInstance)
        GULAppDelegateSwizzler.proxyOriginalDelegateIncludingAPNSMethods()
        
        guard GULAppDelegateSwizzler.sharedApplication()?.delegate != nil else {
            return
        }
        
        let selector = #selector((NSCUIApplicationDelegate).application(_:didReceiveRemoteNotification:fetchCompletionHandler:))
        if (!(GULAppDelegateSwizzler.sharedApplication()!.delegate!.responds(to: selector))) {
            
            
            let method = class_getInstanceMethod(
                object_getClass(NSCUIApplicationDelegate.sharedInstance),
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
        
        
        
        let tokenSelector = #selector(NSCUIApplicationDelegate.application(_:didRegisterForRemoteNotificationsWithDeviceToken:))
        if (!(GULAppDelegateSwizzler.sharedApplication()!.delegate!.responds(to: tokenSelector))) {
            
            
            let method = class_getInstanceMethod(
                object_getClass(NSCUIApplicationDelegate.sharedInstance),
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
        
        
        let urlHandlingSelector = #selector(NSCUIApplicationDelegate.application(_:open:options:))
        if (!(GULAppDelegateSwizzler.sharedApplication()!.delegate!.responds(to: urlHandlingSelector))) {
            
            
            let method = class_getInstanceMethod(
                object_getClass(NSCUIApplicationDelegate.sharedInstance),
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
        #if canImport(FirebaseAuth)
        if(Auth.auth().canHandle(url)){
            return true
        }
        #endif
        
        #if canImport(FirebaseAuthUI)
        let sourceApplication = options[UIApplication.OpenURLOptionsKey.sourceApplication] as! String?
        if(FUIAuth.defaultAuthUI()?.handleOpen(url, sourceApplication: sourceApplication) ?? false){
            return true
        }
        #endif
        return false
    }
    
    
    @objc public func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
        NSCFirebaseMessagingCore.registerDeviceForRemoteMessagesCallback?(false,error as NSError)
        NSCFirebaseMessagingCore.registerDeviceForRemoteMessagesCallback = nil
    }
    
    @objc public func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
    #if canImport(FirebaseMessaging)
        Messaging.messaging().apnsToken = deviceToken
    #endif
        UserDefaults.standard.set(true, forKey: NSCNotificationHelper.REMOTE_NOTIFICATIONS_REGISTRATION_STATUS)
        NSCFirebaseMessagingCore.registerDeviceForRemoteMessagesCallback?(UIApplication.shared.isRegisteredForRemoteNotifications, nil)
        //NSCFirebaseMessagingCore.registerDeviceForRemoteMessagesCallback = nil
        
    #if !canImport(FirebaseMessaging)
        NSCFirebaseMessagingCore.onTokenCallback?(NSCFirebaseMessagingCore.apnsToken(toString: deviceToken))
       // NSCFirebaseMessagingCore.onTokenCallback = nil
    #endif
        
    }
    
    @objc public func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
#if canImport(FirebaseAuth)
        if(Auth.auth().canHandleNotification(userInfo)){
            completionHandler(.noData)
            return
        }
#endif
        

    
        var message = userInfo
        #if canImport(FirebaseMessaging)
        message = parseRemoteMessage(userInfo)
        #endif
        message["foreground"] = application.applicationState == UIApplication.State.active
        NSCFirebaseMessagingCore.onMessageCallback?(message) {
            completionHandler(.newData)
        }
    }
    
}
