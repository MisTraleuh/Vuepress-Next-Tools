---
title: Add a Reverse Proxyzzzzzzzzzzz
pos: 9
---

# Add a Reverse Proxy
---
In the**WAAP**, a **Reverse Proxy is a server** (Apache instance) *which host tunnels* (Apache virtualhosts). The **tunnels protect web applications**. One tunnel is dedicated to each application you want to protect.

Each **Reverse Proxy** can *host* several **tunnels**. It’s a *good idea* to avoid *saturating* a **Reverse Proxy with tunnels**. That is because if you *need* to *stop* or *edit* the **configuration of a Reverse Proxy**, **all the tunnels associated with it will be stopped** or their **configurations** will *be reloaded*. For example, **when changing SSL keys**.

In the **Setup** panel, click the **Reverse** **Proxies** menu. The list is empty.

::: tip To add new Reverse Proxy
Click on the **Add** button
:::

![](../started_assets/add_rp_6.5.png)

Give the Reverse Proxy a name and select the Box that will host it then click **OK**.

::: tip To edit the Reverse Proxy
Select the reverse proxy in the list, then click the **Modify** button
:::