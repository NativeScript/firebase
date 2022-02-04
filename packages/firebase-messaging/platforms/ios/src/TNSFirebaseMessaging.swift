import Foundation
import UIKit


@objc(TNSFirebaseMessaging)
@objcMembers
public class TNSFirebaseMessaging: NSObject {
    public static var showNotificationsWhenInForeground = false
    
    @objc public static var registerDeviceForRemoteMessagesCallback: ((Bool, NSError?) -> Void)? = nil
    
    @objc public static var onNotificationTapCallback: ((NSDictionary) -> Void)? = nil
    
    @objc public static var onMessageCallback: ((NSDictionary) -> Void)? = nil
    
    public static var onTokenCallback: ((String) -> Void)? = nil
    
    
    @objc public static func APNSTokenToString(_ tokenData: NSData)-> String {
        var token = ""
        for tokenByte in tokenData {
            token.append(contentsOf:  String(format: "%02.2hhX", tokenByte))
        }
        return token
    }
}
