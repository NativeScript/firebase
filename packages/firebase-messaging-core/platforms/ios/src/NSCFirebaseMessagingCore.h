#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

typedef void(^BoolCallback)(BOOL success, NSError* _Nullable error);
typedef void(^CompletableDictionaryCallback)(NSDictionary* _Nullable value, void(^_Nonnull complete)(void));
typedef void(^StringCallback)(NSString* _Nullable value);

@interface NSCFirebaseMessagingCore: NSObject

@property (class) BOOL showNotificationsWhenInForeground;

@property (nonatomic, strong, class) BoolCallback _Nullable registerDeviceForRemoteMessagesCallback;

@property (nonatomic, strong, class) CompletableDictionaryCallback _Nullable onNotificationTapCallback;

@property (nonatomic, strong, class) CompletableDictionaryCallback _Nullable onMessageCallback;

@property (nonatomic, strong, class) StringCallback _Nullable onTokenCallback;

+(NSString* _Nonnull) APNSTokenToString: (NSData* _Nonnull)tokenData;
@end

