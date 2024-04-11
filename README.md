Communication Techniques



```mermaid
graph TD;
    idTopic[Communication Techniques]-->id1[Short Polling];
    idTopic-->id2[Long Polling];
    idTopic-->id3[Web Socket];
    idTopic-->id4[Server Sent Events];
    idTopic-->id5[WebHooks];
```
<br />
__________________________________________________________________________________________________________
<br />

```mermaid
graph TD;
    idTopic[Short Polling Example or usecases]-->id1[Real Time system];
    idTopic-->id2[Notification];
    idTopic-->id3[Cricinfo];
    idTopic-->id4[Analytics];
    idTopic-->id5[Version Update];
```
<br />
__________________________________________________________________________________________________________
<br />

```mermaid
graph TD;
    idTopic[Long Polling Example or usecases]-->id1[Real Time Collaboration];
```

<br />
__________________________________________________________________________________________________________
<br />

```mermaid
graph TD;
    idTopic[Web Sockets usecases]-->id1[Analytics];
    idTopic-->id2[Financial Trading];
    idTopic-->id3[Online Gaming];
    idTopic-->id4[Chat Application];
```

```mermaid
graph TD;
    idTopic[Web Sockets Challenges]-->id1[Resource Usage];
    idTopic-->id2[Connection Limit];
    idTopic-->id3[Sticky Sessions];
    idTopic-->id4[Authentication];
    idTopic-->id5[Scaling];
    idTopic-->id6[Load Balancer];
    idTopic-->id7[Cache];
    idTopic-->id8[Proxy/Firewall];
    idTopic-->id9[Testing];
    idTopic-->id10[resource cleanup];
    idTopic-->id10[Backward Compatibility];
```

<br />
__________________________________________________________________________________________________________
<br />

```mermaid
graph TD;
    idTopic[Server Sent Events Usecases]-->id1[Feeds];
    idTopic-->id2[Monitoring Dashboard];
    idTopic-->id3[Notifications];
```

```mermaid
graph TD;
    idTopic[Server Sent Events Res Headers]-->id1[Connection: keep-live];
    idTopic-->id2[Content-type: text/event-stream];
    idTopic-->id3[Cache-Control: no-cache];
    idTopic-->id4["res.write('data: Welcome to server sent events  newLine')"];
```

```mermaid
graph TD;
    idTopic[Server Sent Events Challenges]-->id1[Browser Compatibility];
    idTopic-->id2[Connection Limit];
    idTopic-->id3[Connection Timeout];
    idTopic-->id4[Background Tab Behavior];
    idTopic-->id5[Resource Utilization];
    idTopic-->id6[Load Balancer];
    idTopic-->id7[Sticky Connection];
    idTopic-->id8[Proxy/Firewall];
    idTopic-->id9[Testing];
    idTopic-->id10[Broadcasting];
```

<br />
__________________________________________________________________________________________________________
<br />

```mermaid
graph TD;
    idTopic[Web Hooks Usecases]-->id1[Notication System];
    idTopic-->id2[Data Synchronization];
    idTopic-->id3[Automation];
    idTopic-->id3[Github pipelines];
```

<br />
__________________________________________________________________________________________________________
<br />
<br />
<br />
<br />



| Short Polling  | Long Polling | Web Socket  | Server Sent Events | WebHooks |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Short Live Connection  | Single Long lived connection | Full Duplex Communication | Long Live unidirectional communication | Real Time Communication |
| No Persistent Connection  | Connection is open untill you get new data/ timeout  | Single Long live TCP Connection | Single HTTP connection | Event Driven |
| Less Resource Utility  | Cons: Large number of connection will increase the load  | Continuous Bi-Directional Communication | - | Post Rest API (payload, Authorization Secret) |
| Problem With Scale | -  | - | - | Retry Mechanism |
| - | - | - | - | Verification/Acknowledgement |
