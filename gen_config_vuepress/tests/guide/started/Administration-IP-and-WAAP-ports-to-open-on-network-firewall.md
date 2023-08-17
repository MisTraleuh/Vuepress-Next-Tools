# Administration IP and WAAP ports to open on network firewall
---
## Have a dedicated administration interface

The **Administration IP address** can be on *any network card in the solution*. Each **appliance or virtual machine** can *support several cards* (*4 on Dell appliances*).

It is up to the **administrator**, depending on the **network topology**, to make the *choice of placing the IP address* on a *dedicated network interface* or one that is **shared with reception of traffic**.

::: warning
**We recommends using a dedicated network interface.**
:::

## WAAP TCP/UDP ports authorizations

**Listening ports of the HTTP/HTTPS services** declared on the **WAAP must be authorized on the incoming traffic**.

Here are **ports** used by a **WAAP cluster** that should be **authorized**:

| **Source** | **Source port** | **Destination** | **Destination port** | **Type** | **Needed for …** |
| :---: | :---: | :---: | :---: | :---: | :---: |
|  | \*  | All WAAP members | 3001 | TCP | Contact the Management with the administration interface and access to the [monitoring interface](/display/WAF651EN/Web+Monitoring+interface) and [logs visualizations](/display/WAF651EN/Logs+visualization+with+Kibana). |
| | \*  | All WAAP members | 3001 | TCP | Communication between WAAP members. |
| | \*  | All WAAP members | 22  | TCP | SSH access. Can be modified. |
| | \*  | Management WAAP to WAAP members | 2222 | TCP | Applicative data exchange (logs) between WAAP members. |
| | \*  | All WAAP members | 48400 | TCP | Applicative WAM data exchange (logs) between WAAP members. |
| | \*  | Internal network, external network | 53  | TCP | DNS request if DNS activated in the WAAP member configuration. |
| | \*  | Internal network, external network | Custom (514 by default) | UDP/TCP | Logs alerting with Syslog. Can be modified. |
| | \*  | Management WAAP | 161 | TCP | SNMP |
| | \*  | Internal network, external network | Custom (161 by default) | TCP | SNMP. Can be modified. |
| | 123 | Internal network, external network | 123 | UDP | NTP synchronization. |
| | \*  | All WAAP members | 5432 | TCP | WAM replication. |
| | \*  | All WAAP members | 5433 | TCP | Distributed datastore replication. |

## Should anything be placed between the WAAP and web applications

::: warning
**We recommended** that the **WAAP** be **allowed to connect directly to the Web applications**. However, **depending on network topologies** and **business imperatives**, **load balancers**  , **filtering proxies** and **cache proxies may be encountered**.
:::

## Mapping network architecture

A **few rules regarding network topology** must be **adhered** to:

* For example, there can only be **one Management** in a **cluster of Boxes**. This **Management** must be **connected to the slaves in order to control them** (*stopping and starting servers and services*, *modifying configurations*, *log feedback*, etc.)

* The **Management appliance** sends the **configurations to the slave appliances**, via an *HTTPS connection*, to the *IP addresses* and **administration ports configured in their respective configurations**.

* In *most cases*, only the **Management connects to the slaves**, and *not vice-versa*. But the **Boxes** can *sometimes communicate among themselves*, in **advanced authentication configurations**. That is the case, for example, of a **failover WAM services configuration**.

* Finally, **Web clients** need to be **able to connect to the slaves** and the **Box** needs to be **able to connect to the servers** that are to be .

* The **graphical administration** *client* needs to be able to **connect to the master appliance’s IP address** and **administration ports**.

* Be sure to .

* In the case of a **single Box**, the topology is simple but is subject to the same constraints. The graphical administration client, for example, needs to be able to connect to the IP address and administration ports of the Management appliance.
