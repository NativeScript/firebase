import Foundation
import FirebaseMessaging
import GoogleUtilities
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
        Messaging.messaging().delegate = NSCFIRMessagingDelegate.sharedInstance
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
