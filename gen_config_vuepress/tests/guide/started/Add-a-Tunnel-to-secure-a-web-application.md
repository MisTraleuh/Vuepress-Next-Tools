# Add a Tunnel to secure a web application

Each tunnel will **manage negotiation** of the **flow between clients** and the **application** (*backend*). It is an **“intermediary”** that **analyze** each  then **forward** or **block** them **following the security policy decision**.

Before you **create a tunnel**, you have to have *already created* and **configured a reverse proxy**. That’s because a **tunnel** is **“hosted”** by a **reverse proxy**.

You can **either let** the **Wizard guide** you or *configure your tunnel yourself*.

In the **Setup** panel, click the **Tunnels** menu, then the **Add** button.

![](../started_assets/tunnel-general.png)

In the **configuration dialog that appears**, you must *enter* at least the **name of the tunnel**, the **reverse proxy** and **its destination (IP address/port of the destination backend)**.

Select the **Workflow** to be used. By **default** it will select the **WAAP Default** providing **default protection against web attacks on request** and **responses**.

::: warning We recommend to save as this workflow to customize it and to be able to resolve false positives. For more details about Workflow, see the section 

:::

Now, in the **Network part**, select an **incoming IP**, a **port** and a **server name**. The **tunnel** will be *reachable using* these **elements**.

::: tip Server Name
The **Server Name** field must be entered if several tunnels need to use the same IP address and port on the same reverse proxy in order to differentiate them
:::

![](../started_assets/tunnel-network.png)

***Enter*** the **information of the application** to **protect**: *IP/Host and the port*.

::: warning We recommend the use of SSL/TLS encryption (HTTPS) between the client and the tunnel but also between the tunnel and the application. For this, select a SSL profile and a private certificate in the SSL section.

:::

Then, the **last step** will be to **apply all new objects** created previously to **test the tunnel**.