# The WAAP on an appliance

::: warning
The product must be installed in a DMZ, in a secured location accessible only by authorized persons. It is strictly forbidden to open the appliance without written authorization from UBIKA.
:::

## New Appliances

If you just received the **UBIKA Web Application & API Protection** appliance, you should find in the box:

* The appliance
- 1 power cable or 2 if the server has 2 power supplies

### To start up the appliance:

* Connect the power cable(s) to the appliance
* Turn on the appliance by pressing the button on the front

### To connect locally to the appliance, you can use:

* A monitor (VGA) and a USB keyboard
    
* The serial port (Speed: 9600bauds, Data : 8, Parity : None, Stopbit : 1)
    
## Old Appliances

Appliances can be re-installed to start with a clean instance. Remember that appliances must follow the minimum requirements listed below:

The **WAAP** can only be **installed** on **DELL physical machine provided by UBIKA**.

::: warning Old Appliances 
If you plan to migrate from i-Suite v5.5.x to WAAP 6.5 on your old DELL appliances, we recommend to ask the Technical Support to be sure that the hardware is able to handle the latest WAAP version. It is also recommended to check the end date of the warranty before migrating with an old appliance particularly for production equipment. We also recommend to check appliance's warranty before migrating especially in production environment.
:::

::: danger Minimum configurations of physical machines
Minimum configurations : (CPU, RAM, Hard disk, Network) have to be followed. They guarantee the normal behavior of the product in a test environment. For production environment use the recommended configuration or higher. The minimum configuration can be used only in test environment.
:::

## Management configuration

|                                | Minimum configuration (for testing) | Business Edition | Enterprise Edition (Dedicated Management) |
|:------------------------------:|:-----------------------------------:|:----------------:|:-----------------------------------------:|
|       **CPU / Processor**      |                8 CPU                |   8 CPU or more  |              32 CPU or *more*             |
|        **RAM / Memory**        |               16384 MB              | 32768 MB or more |              128 GB or *more*             |
|   **Hard disk / Disk space**   |                 1 TB                |   1 TB or more   |               1 TB or *more*              |
|          **Network**           |              1 interface            |    1 interface   |                1 interface                | 

## Managed configuration

|                                | Minimum configuration (for testing) | Business Edition |
|:------------------------------:|:-----------------------------------:|:----------------:|
|       **CPU / Processor**      |                8 CPU                |   8 CPU or more  |
|        **RAM / Memory**        |               16384 MB              | 32768 MB or more |
|   **Hard disk / Disk space**   |                 1 TB                |   1 TB or more   |
|          **Network**           |              1 interface            |    2 interfaces  |

::: details For more details about :
[RSCS\_Web-Application-Firewall-Appliances\_dat-sw\_en\_5216-2982-22\_v0300.pdf](/download/./RSCS_Web-Application-Firewall-Appliances_dat-sw_en_5216-2982-22_v0300.pdf?version=2&modificationDate=1601474124683&api=v2)
:::

Now, we can start the **WAAP installation**.