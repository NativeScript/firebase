import Foundation
import UIKit

@objc(TNSNotificationHelper)
public class TNSNotificationHelper: NSObject {
    static let REMOTE_NOTIFICATIONS_REGISTRATION_STATUS = "org.nativescript.firebase.notifications.status"
    
    private static var _sharedInstance: TNSNotificationHelper?  = nil
    
   @objc public static var sharedInstance: TNSNotificationHelper {
        get {
            if(_sharedInstance == nil){
                _sharedInstance = TNSNotificationHelper()
            }
            
            return _sharedInstance!
        }
    }
    
    @objc public func observe(){
        NotificationCenter.default.addObserver(TNSNotificationHelper._sharedInstance!, selector: #selector(TNSNotificationHelper.applicationDidFinishLaunchingNotification(_:)), name: UIApplication.didFinishLaunchingNotification, object: nil)
    }
    
   
    @objc func applicationDidFinishLaunchingNotification(_ notification: NSNotification) {
        TNSUIApplicationDelegate.sharedInstance.observe()
        if #available(iOS 10.0, *) {
            TNSUNUserNotificationCenterDelegate.sharedInstance.observe()
        }
        TNSFIRMessagingDelegate.sharedInstance.observe()
        let auto = UserDefaults.standard.bool(forKey: TNSNotificationHelper.REMOTE_NOTIFICATIONS_REGISTRATION_STATUS)
        let isSimulator = UIDevice.current.name.lowercased().contains("simulator")
        if (auto && !isSimulator) {
            UIApplication.shared.registerForRemoteNotifications()
        }
    }
}
