---
layout: post
title: Chromebook as a Developer Device
categories: chromebook
tags: chromebook developer sdk intellij java kotlin
---

Almost all the applications I need run in some cloud. E-mail program, calendar, chat software, word processor, spreadsheet, presentation program, etc. There are even IDEs in the cloud! But I haven't gotten really warm with them yet. Either they weren't so great from the usability point of view or the payment model didn't meet my expectations. It may cost something, I also use a commercial IDE, but it has to be within an acceptable range. Since I haven't found a cloud IDE that fits my needs, I will continue to work with a local installation of the commercial edition of IntelliJ IDEA Ultimate. That's the idea.

## My Chromebook

I want a device that I can use both as a notebook and as a tablet (convertable). Most of the time I will use it as a notebook, so the flexibility compensates for the much higher weight of a convertible. After working with a MacBook with Retina Display for several years, the Chromebook has to offer a correspondingly high screen resolution. Since I want to run the development environment locally, I need a powerful processor and enough memory -- not as much memory as with a conventional notebook, because everything else runs inside the browser. Since I have several power supplies with USB-C output, the new Chromebook should be able to be loaded via USB-C as well. Then I don't have to buy new chargers for on the road or in the office. Of course it should also be as quiet as possible and have a long battery life. A metallic housing is also very important to me, so that it is rigid (I work a lot on the road) and feels high quality.

With these criteria I went on a search and after some time I found it and bought the Acer Chromebook Spin 13. This time not in the top configuration, but with less RAM and less disk space. It has a powerful processor (Intel Core i5 8th Gen) with 8 GB RAM (max. 16 GB) and 64 GB eMMC-Flash (max. 128 GB). The 10h battery life is enough for long travels and I like the 3:2 display ratio (13", 2256x1504). This device should meet my requirements.

## Linux on a Chromebook

With a recent Chromebook, it's easy to activate Linux support and install Linux applications. The integration with ChromeOS is quite good. The file manager can also access the file system of the Linux emulation, the icons of installed applications are integrated in the ChromeOS launcher and there is a full-fledged terminal (the base seems to be a Debian Linux). Just go your Chromebooks settings, scroll down to the Linux switch and turn it on. All done!

![Screenshot of Chromebook Settings showing the Linux switch](/images/chromebook-settings-linux-switch.png "Screenshot of Chromebook Settings showing the Linux switch")

## IntelliJ IDEA

### Install the prerequisites

First, it is always a good idea to keep the system up to date. Open the Terminal and use the package manager to update the Linux emulation:

    sudo apt-get update
    sudo apt-get upgrade

Now we can install _zip_ and _unzip_:

    sudo apt-get install zip unzip

To manage the SDKs like for example Java, I highly recommend to install [SDKMan](https://sdkman.io/):

    curl -s "https://get.sdkman.io" | bash
    source "/home/marcus/.sdkman/bin/sdkman-init.sh"

Now we are ready to install the SDKs and tools. In my case I need Java 8 and 11:

    sdk install java 8.0.192-zulu
    sdk install java 11.0.1-zulu

For more information about [SDKMan](https://sdkman.io/), please take a look at the project website: https://sdkman.io/

### Install IntelliJ IDEA itself

First, go to the [IntelliJ IDEA Download Page](https://www.jetbrains.com/idea/download/#section=linux) and download the Linux version of IntelliJ IDEA. Unpack the downloaded archive to an empty directory using the following command:

    tar -xzf idea-2018.3.1.tar.gz

That's it! To start IntelliJ IDEA, just run the `idea.sh` from the `bin` subdirectory. After the first start, a new icon should appear in the ChromeOS launcher.

## Problems and Solutions

### Open Web Browser from IntelliJ IDEA

If you are doing web development and want to open a HTML file from inside IntelliJ IDEA, that will not work. IntelliJ IDEA runs inside the Linux emulation and can't access the Chrome browser running directly on ChromeOS. To solve this problem, the easiest solution is to install a browser in the Linux emulation. I decided to go with Firefox:

    sudo apt-get install firefox-esr
