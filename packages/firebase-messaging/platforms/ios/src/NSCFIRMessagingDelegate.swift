import Foundation
import FirebaseMessaging
#if canImport(GoogleUtilities_AppDelegateSwizzler)
// Swift Package Manager exposes the subspec as its own module.
import GoogleUtilities_AppDelegateSwizzler
#elseif canImport(GoogleUtilities)
import GoogleUtilities
#endif
#if canImport(NSCFirebaseMessagingCore)
import NSCFirebaseMessagingCore
#endif
@objc(NSCFIRMessagingDelegate)
public class NSCFIRMessagingDelegate: NSObject, MessagingDelegate {
    public static let sharedInstance = NSCFIRMessagingDelegate()
    private static var isObserving = false
    
    
    public func observe(){
        if(NSCFIRMessagingDelegate.isObserving){
            return
        }
        Messaging.messaging().delegate = self
        NSCFIRMessagingDelegate.isObserving = true
    }
    
    
    @objc public func messaging(_ messaging: Messaging, didReceiveRegistrationToken fcmToken: String?) {
        guard fcmToken != nil else {
            return
        }
    
    #if canImport(NSCFirebaseMessagingCore)
        NSCFirebaseMessagingCore.onTokenCallback?(fcmToken!)
    #endif
        if((GULAppDelegateSwizzler.sharedApplication()?.delegate?.responds(to: #selector(MessagingDelegate.messaging(_:didReceiveRegistrationToken:)))) == true) {
            
            GULAppDelegateSwizzler.sharedApplication()?.delegate?.perform(#selector(MessagingDelegate.messaging(_:didReceiveRegistrationToken:)), with: messaging.apnsToken, with: fcmToken!)
        }
    }
}
