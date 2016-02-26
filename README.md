###Local Storage Coding Challenge

In this task you need to implement a storage manager library that allows a user to store and retrieve local data persistently (also after page refresh). Data will be managed inside using localStorage. You have 45 (60 if you have no JS background) minutes until the first review. You will then have 30 (45 if you have no JS background) more minutes to fix any problems discovered. The interface of the library must include the following methods:

getStorageManager()
Creates an instances of the storage manager.

The following functions need to be defined in the storage manager class
*set( key , value, expiry )
Sets the given value under the given key for given expiry seconds.

*get( key )
Returns the value stored under the given key. Returns undefined if it doesn't exist.

*remove( key )
Removes the value that is stored under the given key

*setProperty( key , property, value, expiry )
Depends what is stored under the given key:
In case it is an object add the given property with the given value to it. Expiry is updated to the given expiry value.
In case nothing is stored create an object with the given property and the value to it. Expiry is updated to the given expiry value.
In case it is not an object throw an exception.
In case it is an array no need to handle this case.