---
pos: 1
---
# Administration interface to manage the cluster

## Downloading

The WAAP product can be managed through a client application that can be downloaded on [https://my.ubikasec.com](https://my.ubikasec.com) in **Tech Support >** **Updates** menu.

This application, also called the **administration interface**, connects to the **management WAAP** appliance set in the step before.

The *administration interface* connects directly the *Management appliance*. **Managed appliances** are controlled by the **Management appliance**.

::: tip 

:::

## Logging into the Management WAAP

To login, enter **IP address or hostname of the Management WAAP appliance**, the listening port *(3001 by default)*, then the login that was chosen during installation of the product (see the [Initializing the Management and Managed mode](/display/UBIKAWAAP69EN/Initializing+the+Management+and+Managed+mode))

![](../started_assets/login-6.5.png)

::: tip 

:::

## Accept the certificate from the default Management WAAP PKI

On the first connection to a **WAAP Management**, the certificate authority from the WAAP has to be trusted to **be able to successfully login**. It *allows* to trust the **identity of the Management WAAP you are connecting**.

![](../started_assets/image2020-12-21_16-29-43.png)

::: warning
We recommend to change the default chain file with an one coming from our own PKI. To do this, go to Setup, Boxes, Global Settings then [GUI certificate](/display/UBIKAWAAP69EN/Global+Settings). See also [Connection certificates](/display/UBIKAWAAP69EN/Connection+certificates).
:::

## Performing connectivity tests

You can test the **Appliance’s connectivity** using the *ad hoc* functions you will find in the application menus (at the upper left).

Click **Tools > Networking**, a window opens and **offers a series of tests for testing tunnel connectivity**, or the *load balancer*, or the *possibility of creating a personalized test*. Tests can be done via ping or HTTP request. **The result of the test is shown in the view below the test buttons**.

The connectivity tests window also contains a **TCP** **Dump** tab. *This tool dumps networks traces*.