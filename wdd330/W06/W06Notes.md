# W06

## Agro API
[Main Page](../AgroAPI/index.html)
[API Docs: Satellite Imagery](https://agromonitoring.com/api/images)

### Limits/Constraints
Calls 1min: 60
Total square ha: 1000
History weather days: 0
History images days: 0

### Endpoints/URL Structure
``` https
http://api.agromonitoring.com/agro/1.0/image/search?start={start date}&end={end date}&polyid={ID of polygon}&appid={API key}
```

### TODO

* [ ] Make polygon for fields
* [ ] Dashboard
    * [ ] Decide what information needs to be in
    * [ ] Views
    * [ ] Select Imagery Type
    * [ ] Select Date Range
        * Convert into Unix
* [ ] Refresh?
* [ ] Local Storage?


## Questions
* Do I need to build this so it will work in the browser w/out needing node/backend? Or can I build it with the assumption that you will be testing it by downloading it and going through the process of downloading any necessary packages