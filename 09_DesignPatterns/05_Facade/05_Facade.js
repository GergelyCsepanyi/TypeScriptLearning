// Usually, we can't modify these codes (because usually these came from a 3rd party library)
var VideoFile = /** @class */ (function () {
    function VideoFile() {
    }
    return VideoFile;
}());
var BitrateReader = /** @class */ (function () {
    function BitrateReader() {
    }
    return BitrateReader;
}());
var AudioMixer = /** @class */ (function () {
    function AudioMixer() {
    }
    return AudioMixer;
}());
var MPEG4CompressionCodec = /** @class */ (function () {
    function MPEG4CompressionCodec() {
    }
    return MPEG4CompressionCodec;
}());
var OggCompressionCodec = /** @class */ (function () {
    function OggCompressionCodec() {
    }
    return OggCompressionCodec;
}());
var CodeFactory = /** @class */ (function () {
    function CodeFactory() {
    }
    return CodeFactory;
}());
// We create a facade class to hide the framework's complexity
// behind a simple interface. It's a trade-off between
// functionality and simplicity.
// Facade class
var VideoConverter = /** @class */ (function () {
    function VideoConverter() {
    }
    return VideoConverter;
}());
// Application classes don't depend on billion classes
// provided by a complex framework. Also, if you decide to
// switch frameworks, you only need to rewrite the facade class.
var Application = /** @class */ (function () {
    function Application() {
    }
    Application.prototype.main = function () {
        var convertor = new VideoConverter();
        //let mp4 = convertor.convert();
        //mp4.save();
    };
    return Application;
}());
