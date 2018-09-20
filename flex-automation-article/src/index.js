"use-strict"

const kinveyFlexSDK = require('kinvey-flex-sdk');

kinveyFlexSDK.service((err, flex) => {
    if (err) {
       console.log("Error while initializing Flex!");
       return; 
    }

    flex.functions.register("testFunction", (context, complete, modules) => {
        flex.logger.info("I am a simple test function.");
        flex.logger.warn("I will do nothing special.");
        return complete().setBody( { success: "true", serviceVersion: "2.0.0"} ).ok().next();
    });
});
