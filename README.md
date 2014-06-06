# Water Heater
**General Electric Appliances Water Heater Software Development Kit**

This node.js package provides functionality for communicating with a water heater via the [General Electric Appliance Software Development Kit](https://github.com/GEMakers/gea-sdk). In order to use this software, you must first connect your water heater to your computer using the [Green Bean](https://github.com/GEMakers/green-bean).

## Overview

1. [Using the Software](#using-the-software)
    - [waterHeater.desiredMode](#waterheaterdesiredmode)
    - [waterHeater.vacationDaysRemaining](#waterheatervacationdaysremaining)
    - [waterHeater.actualTemperature](#waterheateractualtemperature)
    - [waterHeater.desiredTemperature](#waterheaterdesiredtemperature)
    - [waterHeater.fallbackMode](#waterheaterfallbackmode)
    - [waterHeater.fallbackTemperature](#waterheaterfallbacktemperature)
    - [waterHeater.actualMode](#waterheateractualmode)
    - [waterHeater.filterStatus](#waterheaterfilterstatus)
    - [waterHeater.remoteOverride](#waterheaterremoteoverride)
    - [waterHeater.availableModes](#waterheateravailablemodes)
    - [waterHeater.errorCodes](#waterheatererrorcodes)
1. [Appendix](#appendix)
    - [Unit Mode](#unit-mode)
    - [Remote Override](#remote-override)
    - [Available Modes](#available-modes)

### Using the Software
Below are a few node.js applications that demonstrate how to use this package to interact with a water heater.

#### *waterHeater.desiredMode*
The desired unit mode is an integer value of the [unit mode](#unit-mode) enumeration.

``` javascript
var greenBean = require("green-bean");

greenBean.connect("water-heater", function(waterHeater) {
    waterHeater.desiredMode.read(function(value) {
        console.log("desired mode is:", value);
    });

    waterHeater.desiredMode.subscribe(function(value) {
        console.log("desired mode changed:", value);
    });

    waterHeater.desiredMode.write(1);
});
```

#### *waterHeater.vacationDaysRemaining*
The number of vacation days remaining is an unsigned integer value.

``` javascript
var greenBean = require("green-bean");

greenBean.connect("water-heater", function(waterHeater) {
    waterHeater.vacationDaysRemaining.read(function(value) {
        console.log("vacation days remaining:", value);
    });

    waterHeater.vacationDaysRemaining.subscribe(function(value) {
        console.log("vacation days remaining changed:", value);
    });

    waterHeater.vacationDaysRemaining.write(1);
});
```

#### *waterHeater.actualTemperature*
The actual temperature is a read-only unsigned integer in degrees Fahrenheit.

``` javascript
var greenBean = require("green-bean");

greenBean.connect("water-heater", function(waterHeater) {
    waterHeater.actualTemperature.read(function(value) {
        console.log("actual temperature is:", value);
    });

    waterHeater.actualTemperature.subscribe(function(value) {
        console.log("actual temperature changed:", value);
    });
});
```

#### *waterHeater.desiredTemperature*
The desired temperature is an unsigned integer in degrees Fahrenheit.

``` javascript
var greenBean = require("green-bean");

greenBean.connect("water-heater", function(waterHeater) {
    waterHeater.desiredTemperature.read(function(value) {
        console.log("desired temperature is:", value);
    });

    waterHeater.desiredTemperature.subscribe(function(value) {
        console.log("desired temperature changed:", value);
    });

    waterHeater.desiredTemperature.write(140);
});
```

#### *waterHeater.fallbackMode*
The fallback mode is a read-only integer value of the [unit mode](#unit-mode) enumeration.

``` javascript
var greenBean = require("green-bean");

greenBean.connect("water-heater", function(waterHeater) {
    waterHeater.fallbackMode.read(function(value) {
        console.log("fallback mode is:", value);
    });

    waterHeater.fallbackMode.subscribe(function(value) {
        console.log("fallback mode changed:", value);
    });
});
```

#### *waterHeater.fallbackTemperature*
The fallback temperature is a read-only unsigned integer in degrees Fahrenheit.

``` javascript
var greenBean = require("green-bean");

greenBean.connect("water-heater", function(waterHeater) {
    waterHeater.fallbackTemperature.read(function(value) {
        console.log("fallback temperature is:", value);
    });

    waterHeater.fallbackTemperature.subscribe(function(value) {
        console.log("fallback temperature changed:", value);
    });
});
```

#### *waterHeater.actualMode*
The actual mode is a read-only integer value of the [unit mode](#unit-mode) enumeration.

``` javascript
var greenBean = require("green-bean");

greenBean.connect("water-heater", function(waterHeater) {
    waterHeater.actualMode.read(function(value) {
        console.log("actual mode is:", value);
    });

    waterHeater.actualMode.subscribe(function(value) {
        console.log("actual mode changed:", value);
    });
});
```

#### *waterHeater.filterStatus*
The filter status is a read-only object with the following fields:
- filterUsedPercentage (an unsigned integer representing the percentage of the filter lifetime used)

``` javascript
var greenBean = require("green-bean");

greenBean.connect("water-heater", function(waterHeater) {
    waterHeater.filterStatus.read(function(value) {
        console.log("filter status is:", value);
    });

    waterHeater.filterStatus.subscribe(function(value) {
        console.log("filter status changed:", value);
    });
});
```

#### *waterHeater.remoteOverride*
The remote override is an integer value of the [remote override](#remote-override) enumeration.

``` javascript
var greenBean = require("green-bean");

greenBean.connect("water-heater", function(waterHeater) {
    waterHeater.remoteOverride.read(function(value) {
        console.log("remote override is:", value);
    });

    waterHeater.remoteOverride.subscribe(function(value) {
        console.log("remote override changed:", value);
    });

    waterHeater.remoteOverride.write(1);
});
```

#### *waterHeater.availableModes*
The available modes are a read-only integer value of the [available modes](#available-modes) bit field.

``` javascript
var greenBean = require("green-bean");

greenBean.connect("water-heater", function(waterHeater) {
    waterHeater.availableModes.read(function(value) {
        console.log("available modes are:", value);
    });

    waterHeater.availableModes.subscribe(function(value) {
        console.log("available modes changed:", value);
    });
});
```

#### *waterHeater.errorCodes*
The error codes are a read-only array of integers.

``` javascript
var greenBean = require("green-bean");

greenBean.connect("water-heater", function(waterHeater) {
    waterHeater.errorCodes.read(function(value) {
        console.log("error codes are:", value);
    });

    waterHeater.errorCodes.subscribe(function(value) {
        console.log("error codes changed:", value);
    });
});
```

### Appendix

#### Unit Mode
The following is a list of the available unit modes and their enumerated value.

| Value   | Name              |
|:-------:|:------------------|
| 0       | None              |
| 1       | Hybrid            |
| 2       | Standard Electric |
| 3       | eHeat             |
| 4       | High Demand       |
| 5       | Vacation          |

#### Remote Override
The following is a list of the remote override states and their enumerated value.

| Value   | Name          |
|:-------:|:--------------|
| 0       | Not initiated |
| 1       | Initiated     |

#### Available Modes
The following is a diagram of the value for each bit in the available modes.
If the bit is set (value is 1) then that mode is available.
If the bit is cleared (value is 0) then that mode is not available.

| Bit     | Description       |
|:-------:|:------------------|
| 0       | Hybrid            |
| 1       | Standard Electric |
| 2       | eHeat             |
| 3       | High Demand       |
| 4       | Vacation          |
| 5+      | Reserved          |
