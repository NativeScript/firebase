import Foundation
import UIKit
import GoogleUtilities
import FirebaseDynamicLinks

@objc(TNSFirebaseDynamicLinksAppDelegate)
public class TNSFirebaseDynamicLinksAppDelegate: UIResponder , UIApplicationDelegate {
    
    private static var _launchOptions: [AnyHashable : Any]? = nil
    
    private static var _sharedInstance: TNSFirebaseDynamicLinksAppDelegate?  = nil
    
    @objc public static var onLinkCallback: ((DynamicLink) -> Void)? = nil
    
    @objc public static var sharedInstance: TNSFirebaseDynamicLinksAppDelegate {
        get {
            if(_sharedInstance == nil){
                _sharedInstance = TNSFirebaseDynamicLinksAppDelegate()
                
                NotificationCenter.default.addObserver(TNSFirebaseDynamicLinksAppDelegate._sharedInstance!, selector: #selector(TNSFirebaseDynamicLinksAppDelegate.applicationDidFinishLaunchingNotification(_:)), name: UIApplication.didFinishLaunchingNotification, object: nil)
            }
            
            return _sharedInstance!
        }
    }
    
    
    @objc public func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
        
        return application(app, open: url, sourceApplication: options[UIApplication.OpenURLOptionsKey.sourceApplication] as? String, annotation: options[UIApplication.OpenURLOptionsKey.annotation]!)
    }
    
    @objc public func application(_ application: UIApplication, open url: URL, sourceApplication: String?, annotation: Any) -> Bool {
        
        var dynamicLink = DynamicLinks.dynamicLinks().dynamicLink(fromCustomSchemeURL: url);
        
        if (dynamicLink == nil) {
            dynamicLink = DynamicLinks.dynamicLinks().dynamicLink(fromUniversalLink: url);
        }
        
        if (dynamicLink == nil) {
            return false
        }
        
        if (dynamicLink?.url != nil) {
            TNSFirebaseDynamicLinksAppDelegate.onLinkCallback?(dynamicLink!)
        }
        
        return false
        
    }
    
    @objc public func application(_ application: UIApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool {
        var retried = false;
        
        if(userActivity.webpageURL != nil){
            DynamicLinks.dynamicLinks().handleUniversalLink(userActivity.webpageURL!) { dynamicLink, error in
                if(error == nil && dynamicLink?.url != nil){
                    TNSFirebaseDynamicLinksAppDelegate.onLinkCallback?(dynamicLink!)
                }
                
                
                if(error != nil && !retried && (error as? NSError)?.domain == NSPOSIXErrorDomain && (error as? NSError)?.code == 53){
                    retried = true
                    DynamicLinks.dynamicLinks().handleUniversalLink(userActivity.webpageURL!) { dynamicLink, error in
                        
                        if(error == nil && dynamicLink?.url != nil){
                            TNSFirebaseDynamicLinksAppDelegate.onLinkCallback?(dynamicLink!)
                        }
                        if(error != nil && error?.localizedDescription != nil){
                            NSLog("%@", "CONSOLE LOG: ", error!.localizedDescription)
                        }
                        
                    }
                }
            }
        }
        
        return false
    }
    
    
    @objc private func applicationDidFinishLaunchingNotification(_ notification: NSNotification) {
        TNSFirebaseDynamicLinksAppDelegate._launchOptions = notification.userInfo
        
        GULAppDelegateSwizzler.registerAppDelegateInterceptor(TNSFirebaseDynamicLinksAppDelegate.sharedInstance)
        GULAppDelegateSwizzler.proxyOriginalDelegateIncludingAPNSMethods()
        
        guard GULAppDelegateSwizzler.sharedApplication()?.delegate != nil else {
            return
        }
        
        let selector = #selector((TNSFirebaseDynamicLinksAppDelegate).application(_:open:options:))
        if (!(GULAppDelegateSwizzler.sharedApplication()!.delegate!.responds(to: selector))) {
            
            let method = class_getInstanceMethod(
                object_getClass(TNSFirebaseDynamicLinksAppDelegate.sharedInstance),
                selector
            )
            
            if(method != nil){
                class_addMethod(
                    object_getClass(
                        GULAppDelegateSwizzler.sharedApplication()!.delegate
                    ), selector,
                    method_getImplementation(method!),
                    method_getTypeEncoding(method!)
                )
            }
        }
        
        
        
        let sourceSelector = #selector(TNSFirebaseDynamicLinksAppDelegate.application(_:open:sourceApplication:annotation:))
        if (!(GULAppDelegateSwizzler.sharedApplication()!.delegate!.responds(to: sourceSelector))) {
            
            
            let method = class_getInstanceMethod(
                object_getClass(TNSFirebaseDynamicLinksAppDelegate.sharedInstance),
                sourceSelector
            )
            
            
            if(method != nil){
                class_addMethod(
                    object_getClass(
                        GULAppDelegateSwizzler.sharedApplication()!.delegate
                    ), sourceSelector,
                    method_getImplementation(method!),
                    method_getTypeEncoding(method!)
                )
            }
        }
        
        
        let restoreSelector = #selector(TNSFirebaseDynamicLinksAppDelegate.application(_:continue:restorationHandler:))
        if (!(GULAppDelegateSwizzler.sharedApplication()!.delegate!.responds(to: restoreSelector))) {
            
            
            let method = class_getInstanceMethod(
                object_getClass(TNSFirebaseDynamicLinksAppDelegate.sharedInstance),
                restoreSelector
            )
            
            if(method != nil){
                class_addMethod(
                    object_getClass(
                        GULAppDelegateSwizzler.sharedApplication()!.delegate
                    ), restoreSelector,
                    method_getImplementation(method!),
                    method_getTypeEncoding(method!)
                )
            }
        }
    }
}
