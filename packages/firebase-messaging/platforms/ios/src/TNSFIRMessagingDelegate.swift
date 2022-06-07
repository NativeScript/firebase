import Foundation
import FirebaseMessaging
import GoogleUtilities
import TNSFirebaseMessaging

@objc(TNSFIRMessagingDelegate)
public class TNSFIRMessagingDelegate: NSObject, MessagingDelegate {
    public static let sharedInstance: TNSFIRMessagingDelegate = TNSFIRMessagingDelegate()
    private static var isObserving = false
    
    
    public func observe(){
        if(TNSFIRMessagingDelegate.isObserving){
            return
        }
        Messaging.messaging().delegate = TNSFIRMessagingDelegate.sharedInstance
        TNSFIRMessagingDelegate.isObserving = true
    }
    
    
    @objc public func messaging(_ messaging: Messaging, didReceiveRegistrationToken fcmToken: String?) {
        guard fcmToken != nil else {
            return
        }
    
        TNSFirebaseMessaging.onTokenCallback?(fcmToken!)
        
        if((GULAppDelegateSwizzler.sharedApplication()?.delegate?.responds(to: #selector(MessagingDelegate.messaging(_:didReceiveRegistrationToken:)))) == true) {
            
            GULAppDelegateSwizzler.sharedApplication()?.delegate?.perform(#selector(MessagingDelegate.messaging(_:didReceiveRegistrationToken:)), with: messaging.apnsToken, with: fcmToken!)
        }
    }
}
