---
pos: -99
---
# The WAAP on a virtual machine
---
::: tip
The WAAP can be installed on various virtualized environments : .
:::

::: danger Minimum configurations of virtual machines :
Minimal configurations (CPU, RAM, Hard disk, Network) have to be followed. They guarantee the normal behavior of the product in a test environment. For production environment use the recommended configuration or higher. Refer to the following document to deploy a virtual machine according to the license and the traffic that will be supported.



If the configuration does not follow the license used, apply the configuration will not be possible. The Support team can ask to recreate a new virtual machine with the recommended configurations.
:::

## Virtual machine configurations

**Format**: Linux format 64-bit (RedHat, CentOS 8 or Other Linux)

### Management configuration

|       | Minimal configuration (for testing) | Business Edition | Enterprise Edition (Dedicated Management) |
| :---: | :---: | :---: | :---: |
| **CPU cores/threads** | 4 CPU | 8 CPU or more | 32 CPU or more |
| **RAM / Memory** | 16384 MB | 16384 MB or more | 128 GB or more |
| **Hard disk / Disk space** *(KVM: VIRTIO (recommended) or SCSI, and Format QEMU (qcow2) to enable operation of KVM snapshots)*| 128 GB | 1 TB or more | 1 TB or more |
| **Network** | 1 interface minimum | 1 interface minimum | 1 interface minimum |
* **Network** : Prefer one dedicated interface for the product administration and one or more interfaces for the traffic

| Disk space can be fill up fast due to monitoring or access logs. We recommend to reduce the [logs retention](/display/UBIKAWAAP69EN/Global+Settings) for testing environment (1 month instead of 3 months). The number of [monitored metrics](/display/UBIKAWAAP69EN/Metrics) can also be reduced by deactivating the consolidation.| 
---------

## Managed configuration

|     | Minimum configuration (for testing) | Business or Enterprise Edition |
| :---: | :---: | :---: |
| ****CPU cores/threads**** | 4 CPU | 8 CPU or more |
| **RAM / Memory** | 8196 MB | 16384 MB or more |
| **Hard disk / Disk spaceduct for installation.** *(KVM: VIRTIO (recommended) or SCSI, and Format QEMU (qcow2) to enable operation of KVM snapshots)* | 64 GB | 512 GB or more |
| **Network** | 1 interface minimum | 2 interfaces minimum |
* **Network** : Prefer one dedicated interface for the product administration and one or more interfaces for the traffic

| Network interface type following the hypervisor : |
:-----:
|  : VMXNET3 (recommended) or e1000 |
|  : do no use Legacy network drivers. They will not be detected by the WAAP |
|  : VIRTIO (recommended) or Intel Pro 1000 T Server 82543GC |

::: danger Unsupported network card :
Support of old 100Mb card is removed, do no use PCNET network drivers, They will not be detected by the WAAP.
:::

::: details For more details about  :
[https://documentation.ubikasec.com/display/UBIKAWAAP69EN/Physical+Machines](https://documentation.ubikasec.com/display/UBIKAWAAP69EN/Physical+Machines) 
:::

Then **specify** that the **virtual machine** should **boot from the ISO**.

::: danger The use of the pause functions of virtual machines must be prohibited.
This is because a certain number of processes (including VRRP high availability, log management, etc.) can behave unpredictably when the virtual machine awakens. It is preferable to use a complete shutdown of the WAAP, for example before moving or copying files from the virtual machine.
:::

Now, we can start the **WAAP installation**.