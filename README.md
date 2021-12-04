# Crypto Stalk MVP

## Features
1. Crypto List - An infinite scrolling list of CoinMarketCap's latest crypto data.
    - Defaults to top 25 listings results
    - Bottom buttons to scroll to the top or load the next 25 results
    - Click on a cypto to open details
2. My List - A way to stalk a set of cryptos.
    - Search field at the top to add cryptos to "My Crypto" list.
    - Must opt in to background updates & push notifications
    - Sort by alphabetical (A-Z icon) & date added (calendar icon) 
3. Crypto Details - A details page for each crypto result.

4. Push Notifications - The only way to stalk a crypto.
    - Any crypto on your list can be stalked
    - Stalk a crypto by percentage change or threshold
    - Update frequency options
---
## Theme Principles
1. Dark Theme 
    - Mint Primary
    - Lightsalmon Accent
2. Ionic Framework
3. Tabs
---
## Data
1. For now use the [@ionic/storage module](https://github.com/ionic-team/ionic-storage)
2. Data should be stored in key/value pairs
    - "my_list" an array of crypto config settings.
    - "my_list_sort" a string/enum that describes the user's preferred way to order the list.
    - "updates_opt_in_status" a boolean that indicates whether the user has opted in to background stalks.
    - "update_frequency" an int for how often the stalks should be performed.
    - "notifications_opt_in_status" a boolean that indicates whether the user has opted in to push notifications.
3. Settings Examples
    ```json 
    {
        "my_list": [
            {
                "cmc_id": 1,
                "stalks": [
                    {
                        "type": "PERCENT",
                        "value": 2,
                        "frequency": 24
                    }, 
                    {
                        "type": "THRESHOLD",
                        "value": 50000,
                        "frequency": null
                    }
                ]
            }
        ],
        "my_list_sort": "ALPHABETICAL",
        "updates_opt_in_status": true,
        "updates_frequency": 12,
        "notifications_opt_in_status": true
    }
    ```
    ```json
    {
        "my_list": [],
        "my_list_sort": "DATE_WATCHED",
        "updates_opt_in_status": false,
        "updates_frequency": 1,
        "notifications_opt_in_status": false
    }
    ```