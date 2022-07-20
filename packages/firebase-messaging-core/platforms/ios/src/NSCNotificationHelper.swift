import Foundation
import UIKit

@objc(NSCNotificationHelper)
public class NSCNotificationHelper: NSObject {
    static let REMOTE_NOTIFICATIONS_REGISTRATION_STATUS = "org.nativescript.firebase.notifications.status"
    
    private static var _sharedInstance: NSCNotificationHelper?  = nil
    
   @objc public static var sharedInstance: NSCNotificationHelper {
        get {
            if(_sharedInstance == nil){
                _sharedInstance = NSCNotificationHelper()
            }
            
            return _sharedInstance!
        }
    }
    
    @objc public func observe(){
        NotificationCenter.default.addObserver(NSCNotificationHelper._sharedInstance!, selector: #selector(NSCNotificationHelper.applicationDidFinishLaunchingNotification(_:)), name: UIApplication.didFinishLaunchingNotification, object: nil)
    }
    
   
    @objc func applicationDidFinishLaunchingNotification(_ notification: NSNotification) {
        NSCUIApplicationDelegate.sharedInstance.observe()
        if #available(iOS 10.0, *) {
            NSCUNUserNotificationCenterDelegate.sharedInstance.observe()
        }

#if canImport(NSCFIRMessagingDelegate)
        NSCFIRMessagingDelegate.sharedInstance.observe()
#endif
        let auto = UserDefaults.standard.bool(forKey: NSCNotificationHelper.REMOTE_NOTIFICATIONS_REGISTRATION_STATUS)
        let isSimulator = UIDevice.current.name.lowercased().contains("simulator")
        if (auto && !isSimulator) {
            UIApplication.shared.registerForRemoteNotifications()
        }
    }
}
