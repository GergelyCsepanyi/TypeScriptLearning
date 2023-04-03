"use strict";
class FileDataSource {
    constructor(filename) { }
    writeData(data) {
        console.log("Write data to file");
    }
    readData() {
        console.log("Read data from file");
    }
}
class DataSourceDecorator {
    constructor(source) {
        this.wrappee = source;
    }
    writeData(data) {
        this.wrappee.writeData(data);
    }
    readData() {
        this.wrappee.readData();
    }
}
class EncryptionDecorator extends DataSourceDecorator {
    // This happens under the hood
    //   constructor(source: FileDataSource) {
    //     super(source);
    //   }
    writeData(data) {
        console.log("Encrypting the data...");
        super.writeData(data);
    }
    readData() {
        console.log("Decrypting the data...");
        super.readData();
    }
}
class CompressionDecorator extends DataSourceDecorator {
    // Don't need to create the constructor manually, the base constructor is called automatically
    //   constructor(source: FileDataSource) {
    //     super(source);
    //   }
    writeData(data) {
        console.log("Compressing the data...");
        super.writeData(data);
    }
    readData() {
        console.log("Decompressing the data...");
        super.readData();
    }
}
// Option 1: A simple example
class Application {
    constructor() {
        this.data = {
            name: "Test Data",
        };
    }
    usageExample() {
        let source = new FileDataSource("example.data");
        // source: FileDataSource
        source.writeData(this.data);
        source = new CompressionDecorator(source);
        // source: CompressionDecorator -> FileDataSource
        source.writeData(this.data);
        source = new EncryptionDecorator(source);
        // source: EncryptionDecorator -> CompressionDecorator -> FileDataSource
        source.writeData(this.data);
    }
}
// Option 2: Client code that uses an external data source.
class SalaryManager {
    constructor(source) {
        // It comes from an external data source
        this.salaryRecords = {
            name: "Test Data",
        };
        this.source = source;
    }
    load() {
        this.source.readData();
    }
    save() {
        this.source.writeData(this.salaryRecords);
        // ...Other useful methods
    }
}
class ApplicationConfigurator {
    static configurationExample() {
        // These come from an other part of the application
        let enabledEncryprion = true;
        let enabledCompression = true;
        let source = new FileDataSource("salary.data");
        if (enabledEncryprion) {
            source = new EncryptionDecorator(source);
        }
        if (enabledCompression) {
            source = new CompressionDecorator(source);
        }
        const logger = new SalaryManager(source);
        const salary = logger.load();
    }
}
// Option 1
console.log("\nOption1");
const testApp = new Application();
testApp.usageExample();
// Option 2
console.log("\nOption2");
ApplicationConfigurator.configurationExample();
