# shared-clipboard
A simple draft to simulate clipboard sharing between a Linux computer (later referred to as **PC**) and an iPhone (**phone**).

Both **PC** and **phone** must be on the same private network (typically your home network or your phone's personal hotspot).

The idea is to expose a web server on port 3333 of the **PC**.

Let's consider a private IP for the PC, e.g *172.20.10.4*.

Whenever someones tries to access on http://172.20.10.4:3333/copy, the server copies the content of the clipboard of the **PC** and sends it over the network.

On the other hand, sending a POST request on http://172.20.10.4:3333/paste updates the content of **PC**'s clipboard content with the request's body.

# PC side

## Find your private IP adress

Such can be done with the command

```bash
ip a
```

This will be useful in [this](#phone-side) section

## Autostart the js script

The script always needs to run. I make it start with my [window manager](https://github.com/awesomeWM/awesome) but you can choose any method that fits your needs.

# Phone side

