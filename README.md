# chatty

#### Using NodeJS and Net Cat to create live chat apps

##### For chat1.js

        node chat1.js
        "Open a new terminal/tab/pane"
        nc localhost 9000

Now when you type a message, the server will serve that message right back at you!

##### For chat2.js

        npm install stream-set
        node chat2.js
        "Open two new panes/terminals/tabs"
        nc localhost 9000 in each tabs/pane/terminal

Now each session can chat to eachother

###### Using this great tutorial to build this and learn more about NodeJS: [tutorial](https://opbeat.com/blog/posts/how-to-write-a-p2p-chat-application-by-mathias-buus/)
