// Usually, we can't modify these codes (because usually these came from a 3rd party library)
class VideoFile {}
class BitrateReader {}
class AudioMixer {}
class MPEG4CompressionCodec {}
class OggCompressionCodec {}
class CodeFactory {}

// We create a facade class to hide the framework's complexity
// behind a simple interface. It's a trade-off between
// functionality and simplicity.

// Facade class
class VideoConverter {
  //   convert(filename: File, format: string): File {
  //     const file = new VideoFile(filename);
  //     const sourceCodec = new CodeFactory().extract(file);
  //     let destinationCodec;
  //     if (format === "mp4") {
  //       destinationCodec = new MPEG4CompressionCodec();
  //     } else {
  //       destinationCodec = new OggCompressionCodec();
  //     }
  //     let buffer = BitrateReader.read(filename, sourceCodec);
  //     let result = BitrateReader.convert(buffer, destinationCodec);
  //     result = new AudioMixer().fix(result);
  //     return new File(result);
  //   }
}

// Application classes don't depend on billion classes
// provided by a complex framework. Also, if you decide to
// switch frameworks, you only need to rewrite the facade class.
class Application {
  main() {
    let convertor = new VideoConverter();
    //let mp4 = convertor.convert();
    //mp4.save();
  }
}
