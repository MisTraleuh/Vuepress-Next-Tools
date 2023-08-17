# Configure IP addresses, routes and server time

Previously, you have **configured** the role  of the **Box**. It enables communication between the **Administration Interface** and the appliance.

::: warning
Changes have to be applied in order to take effect.
:::

### Setup a new IP address

We will **add** an new *IP address* on which we’ll be **able to host a Reverse Proxy**.

::: warning We recommend to add the new IP address on different network port than the one used for the WAAP administration.

:::

Physical appliances have **four interfaces**. On **virtual appliances**, the **number of network interfaces is permanently fixed at the time of installation of the appliance**.

Go to the **Setup** panel, click on **IP Adresses**, then add a new IP.

## Setup a new route

The **Routes** tab (in the **Setup** panel) lets us 

1.  Click on the **Add** button. Choose an **Appliance** for which you want to **add a route**
2.  **Give the route a name**
3.  **Define the type of route** (default or personalized):
    *  The **default route** is the *one* that will be *used for all destination*.
    *  In **personalized mode**, the *route is no longer used for all destinations*, but **only for the ones defined** in the **Destination IP Address** and **Destination Netmask** fields.
        

## Setup the time (NTP)  

::: warning We highly recommend to update the server time to your timezone

:::

It will **assure that all dates on logs** and **metrics are correct**. Some features will need the **WAAP** to be **on time to work**.  

****:

1. **Synchronize** time with using **NTP server**: *to add a NTP server*, go to **Setup panel**, **Boxes** then **Ntp Servers**.
2. **Manually update** the time: go to **Setup panel**, **Boxes**, *select a Box*, **Box settings**, **Configurations**, select **Set time**.  
    
Now, you can **add** a **Reverse Proxy** that will *host tunnels and protect your applications*.