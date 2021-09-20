import Foundation
import GoogleMobileAds

@objcMembers
@objc(TNSGA)
public class TNSGA:NSObject {
    
    @objc(Orientation)
    public enum Orientation:Int, RawRepresentable {
        case Portrait
        case Landscape
        case Device
        public typealias RawValue = UInt32
        
        public init?(rawValue: UInt32) {
            switch rawValue {
            case 0:
                self = .Portrait
            case 1:
                self = .Landscape
            case 2:
                self = .Device
            default:
                return nil
            }
        }
        
        public var rawValue: RawValue {
            switch self {
            case .Portrait:
                return 0
            case .Landscape:
                return 1
            case .Device:
                return 2
            }
        }
    }
    
    @objc(Width)
    public enum Width:Int, RawRepresentable {
        
        case FullWidth
        case AutoHeight
        public typealias RawValue = UInt32
        
        public init?(rawValue: UInt32) {
            switch rawValue {
            case 0:
                self = .FullWidth
            case 1:
                self = .AutoHeight
            default:
                return nil
            }
        }
        
        public var rawValue: RawValue {
            switch self {
            case .FullWidth:
                return 0
            case .AutoHeight:
                return 1
            }
        }
        
    }

    @objc(AdLoaderAdType)
    public enum AdLoaderAdType: Int, RawRepresentable {
        case CustomNative
        case GAMBanner
        case Native
        public typealias RawValue = String
        
        public init?(rawValue: String) {
            switch rawValue {
            case GADAdLoaderAdType.customNative.rawValue:
                self = .CustomNative
            case GADAdLoaderAdType.gamBanner.rawValue:
                self = .GAMBanner
            case GADAdLoaderAdType.native.rawValue:
                self = .Native
            default:
                return nil
            }
        }
        
        public var rawValue: RawValue {
            switch self {
            case .CustomNative:
                return GADAdLoaderAdType.customNative.rawValue
            case .GAMBanner:
                return GADAdLoaderAdType.gamBanner.rawValue
            case .Native:
                return GADAdLoaderAdType.native.rawValue
            }
        }
    }
    
    public static func AdLoaderAdTypeToString(_ type: AdLoaderAdType) -> String {
        return type.rawValue
    }
    
    public static func createAnchoredAdaptiveBanner(width: CGFloat,_ orientation: Orientation) -> GADAdSize {
        switch orientation {
        case .Landscape:
            return GADLandscapeAnchoredAdaptiveBannerAdSizeWithWidth(width)
        case .Portrait:
            return GADPortraitAnchoredAdaptiveBannerAdSizeWithWidth(width)
        default:
            return GADCurrentOrientationAnchoredAdaptiveBannerAdSizeWithWidth(width)
        }
    }
    
    
    public static func createAnchoredAdaptiveBanner(_ width: Width,_ orientation: Orientation) -> GADAdSize {
        switch orientation {
        case .Landscape:
            switch width {
            case .AutoHeight:
                return GADAdSizeFullWidthLandscapeWithHeight(0)
            case .FullWidth:
               return GADAdSizeFullWidthLandscapeWithHeight(0)
            default:
                return kGADAdSizeInvalid
            }
        case .Portrait:
            switch width {
            case .AutoHeight:
                return GADAdSizeFullWidthPortraitWithHeight(0)
            case .FullWidth:
                return GADAdSizeFullWidthPortraitWithHeight(0)
            default:
                return kGADAdSizeInvalid
            }
        default:
            return kGADAdSizeInvalid
        }
    }
    
    
    
    public static func createInlineAdaptiveBanner(width: CGFloat,_ orientation: Orientation) -> GADAdSize {
        switch orientation {
        case .Landscape:
            return GADLandscapeInlineAdaptiveBannerAdSizeWithWidth(width)
        case .Portrait:
            return GADPortraitInlineAdaptiveBannerAdSizeWithWidth(width)
        default:
            return GADCurrentOrientationInlineAdaptiveBannerAdSizeWithWidth(width)
        }
    }
    
    
    public static func createInlineAdaptiveBanner(_ width: Width,_ orientation: Orientation) -> GADAdSize {
        switch orientation {
        case .Landscape:
            switch width {
            case .AutoHeight:
                return GADAdSizeFullWidthLandscapeWithHeight(0)
            case .FullWidth:
               return GADAdSizeFullWidthLandscapeWithHeight(0)
            default:
                return kGADAdSizeInvalid
            }
        case .Portrait:
            switch width {
            case .AutoHeight:
                return GADAdSizeFullWidthPortraitWithHeight(0)
            case .FullWidth:
                return GADAdSizeFullWidthPortraitWithHeight(0)
            default:
                return kGADAdSizeInvalid
            }
        default:
            return kGADAdSizeInvalid
        }
    }
}
