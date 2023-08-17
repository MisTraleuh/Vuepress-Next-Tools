# Configure the Management or Managed mode
---
Start the virtual machine or appliance, You will see the first screen of the TUI in the VM manager console or directly using keyboard and monitor plugged on the appliance.

![](../started_assets/0001-first-screen.png)

## Management Mode

Configurations (networks, reverse proxies, application firewalls and WAM) are *applied* on the **Boxes** by a configuration server located on the *Management*. **The administration interface allows to manage it**. The administration is centralized once the Box is connected to a Management Box.

This three-tier infrastructure makes it easy to increase the number of machines that process the application flows.

If *multiple appliances are required*, the *configuration server* will publish the settings on the production **Managed Box**.

* Press ***F2*** key to start the initialization
    * Using the keyboard arrows, press ***right/top/down*** to navigate in the keyboard layout options
    * Press on the ***space*** key to select the keyboard layout (you will see the checkbox change to [o] instead of [ ])

![](../started_assets/0002-first-f2.png)

* Press on the ***Enter*** to continue
* 
    * At least 8 characters ()
    * Must contains at least 
    * Must contains at least 
    * Must contains at least 
* Press ***Enter*** to continue

![](../started_assets/0002-first-password.png)

* 
    * **Management** : Manage configurations, logs and Managed Boxes
    * **Managed** : Controlled by the WAAP Management.
        * Use **arrow keys** to select the good option
        * Use ***Space*** key to change option
        * We choose the **Management** option
        * Press ***Enter*** to continue

![](../started_assets/0003-first-initialization.png)

* 
    * It will be used to connect with the **GUI on the Management**
        * 
        * The security policy is the same than the TUI password

::: danger
This first user will be created to enable login via the Administration Interface. Note that the TUI login/password will not be changed. Take care not to lose the login/password pair. Afterward, we recommend creating several accounts via the Administration Interface.

Only passwords containing at least 8 characters with at least one upper case character, one lower case character, one digit and one special character are valid. Furthermore, the password will be checked against a pro-active password checker library to avoid using obvious passwords (changeme, 123456...).Note the also that the password has a validity of 90 days.
:::

*   Press ***Enter*** to continue

![](../started_assets/0004-first-initialization.png)

* You will now define the administration network configuration.
    * *Select* the network interface used for administering the **WAAP**
    * *Enter* the administration IP of the Management Box
    * *Enter* the subnet mask (255.255.255.0 by default)
    * If necessary, enter a default gateway
    * *Enter* the administration port for the administration interface (3001 by default). The IP / port will be used later to connect with the administration interface

![](../started_assets/administration-IP-configuration.png)

* Press ***Enter*** key to Apply the network configuration
    * 

![](../started_assets/0005-first-apply.png)

*   A message will be prompted when all services are availables

![](../started_assets/0006-first-ready.png)

You can now connect to the **Management box** using the GUI

## Managed Mode

To set an **Box in Managed mode**, *sign in to the TUI*.

* Press ***F2*** key to start the initialization
    * Using the keyboard arrows, press ***right/top/down*** to navigate in the keyboard layout options
    * Press on the ***space*** key to select the keyboard layout (you will see the checkbox change to [o] instead of [ ])

![](../started_assets/0002-first-f2.png)

* Press on the ***Enter*** to continue
* 
    * At least 8 characters ()
    * Must contains at least 
    * Must contains at least 
    * Must contains at least 
* Press ***Enter*** to continue

![](../started_assets/0002-first-password.png)

* 
    * **Management** : Manage configurations, logs and Managed Boxes
    * **Managed** : Controlled by the WAAP Management.
        * Use **arrow keys** to select the good option
        * Use ***Space*** key to change option
        * We choose the **Management** option
        * Press ***Enter*** to continue

![](../started_assets/0003-first-initialization_managed.png)

* You will now define the administration network configuration.
    * *Select* the network interface used for administering the WAAP
    * *Enter* the administration IP of the Management Box
    * *Enter* the subnet mask (255.255.255.0 by default)
    * **If necessary, enter a default gateway**
    * *Enter* the administration port for the administration interface (3001 by default). The IP / port will be used later to connect with the administration interface

![](../started_assets/administration-IP-configuration_managed.png)

* Press ***Enter*** key to Apply the network configuration
     * 

![](../started_assets/0005-first-apply_managed.png)

* A message will be prompted when all services are availables

You can now connect to the **Management box** using the GUI

Now, we need [to link the Managed Box to the Management Box](/display/UBIKAWAAP69EN/Adding+a+Box). To do this, log on to the Management via the administration interface.

## Confirming linking of the managed to the WAAP manager

To *link* the **managed** to the **manager**, you need to *log* on to the **manager** via the **administration interface**.

Use the information you entered during configuration of the manager via the TUI **(IP address/Port login/password)**.

Once you’re connected and the console is loaded, go to **Setup > Box** and add the managed i-Box by clicking the **Add** button. For more information about options, see the [Adding a Box](/display/UBIKAWAAP69EN/Adding+a+Box) page.

![](../started_assets/6_add_managed.png)

> N.B: The manager must be able to converse (HTTPS protocol) with the managed.

The new *Box* is now *available*. It is now able to host new **Reverse Proxies**.