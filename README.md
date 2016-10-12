#Currently in BETA
#Passman

[![Build Status](https://travis-ci.org/nextcloud/passman.svg?branch=master)](https://travis-ci.org/nextcloud/passman)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/nextcloud/passman/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/nextcloud/passman/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/nextcloud/passman/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/nextcloud/passman/?branch=master)


Passman is a full featured password manager. 
Features:
- Vaults
- Vault key is never send to the server
- Import from different password managers
- Credentials are stored with 256 bit AES
- Ability to add custom fields to credentials
- Build in One Time password generator
- Password analyzer
- Share passwords
- Import from various password managers:
  - KeePass
  - LastPass
  - DashLane
  - ZOHO
  - Clipperz.is
## Tested on
- NextCloud 10+
- ownCloud 9.1+


##Screenshots
![Logged in to vault](http://i.imgur.com/ciShQZg.png)   

![Credential selected](http://i.imgur.com/3tENldT.png)   

![Edit credential](http://i.imgur.com/Iwm3hUe.png)   

![Password tool](http://i.imgur.com/ZYkN70r.png)

For more screenshots: [Click here](http://imgur.com/a/giKVt)

## Code reviews
If you have any improvements regarding our code.
Please do the following
- Clone us
- Make your edits
- Add your name to the contributors 
- Send a PR   

Or if you're feeling lazy, create an issue, and we'll think about it.



## Development
Passman uses a single `.js` file for the templates.
`templates.js` is build width `grunt`.
To watch for changes use `grunt watch`

## Main developers
- Brantje
- Animalillo

## Contributors
Add yours when creating a pull request!
- None


## FAQ
**Are you adding something to check if malicious code is executing on the browser?**   
No, because malitous code could edit the functions that check for malicious code.