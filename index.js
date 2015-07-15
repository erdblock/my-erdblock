// init erdblock object
var erdblock                        = require("erdblock")()

// init express object
var express                         = require("express")
var app = express()

// setup url handler for erdblock
app.use("/", erdblock)

// configure main settings
erdblock.locals.title               = "Hello World"
erdblock.locals.subtitle            = "Subtitle"
erdblock.locals.profileImage        = __dirname + "/assets/profile.png"
erdblock.locals.coverImage          = __dirname + "/assets/cover.png"

// configure the plugins, and add them to the erdblock object
var website                         = require("erdblock-website")()
website.locals.config.title.setValue("Example")
website.locals.config.url.setValue("http://www.example.com/")
website.locals.config.description.setValue("Example Description")
erdblock.addPlugin(website)

// configure additional plugins

// configure port
app.listen(3000)
