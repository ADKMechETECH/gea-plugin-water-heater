/*
 * Copyright (c) 2014 General Electric
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.
 *
 */

const WATER_HEATER_BASE = 0x4000;

function WaterHeater (appliance, base) {
    appliance.desiredMode = appliance.erd({
        erd: base++,
        format: "UInt8"
    });

    appliance.vacationDaysRemaining = appliance.erd({
        erd: base++,
        format: "UInt8"
    });

    appliance.actualTemperature = appliance.erd({
        erd: base++,
        format: "UInt8"
    });

    appliance.desiredTemperature = appliance.erd({
        erd: base++,
        format: "UInt8"
    });

    appliance.fallbackMode = appliance.erd({
        erd: base++,
        format: "UInt8"
    });

    appliance.fallbackTemperature = appliance.erd({
        erd: base++,
        format: "UInt8"
    });

    appliance.actualMode = appliance.erd({
        erd: base++,
        format: "UInt8"
    });

    appliance.filterStatus = appliance.erd({
        erd: base++,
        format: [
            "filterUsedPercentage:UInt8"
        ]
    });

    appliance.remoteOverride = appliance.erd({
        erd: base++,
        format: "UInt8"
    });

    appliance.availableModes = appliance.erd({
        erd: base++,
        format: "UInt8"
    });

    appliance.errorCodes = appliance.erd({
        erd: base++,
        format: "Bytes"
    });

    return appliance;
}

exports.plugin = function (bus, configuration, callback) {
    bus.on("appliance", function (appliance) {
        appliance.read(WATER_HEATER_BASE, function (value) {
            bus.emit("water-heater", WaterHeater(bus, appliance, WATER_HEATER_BASE));
        });
    });

    var create = bus.create;

    bus.create = function (name, callback) {
        create(name, function (appliance) {
            if (name == "water-heater") {
                appliance.address = configuration.address;
                appliance.version = configuration.version;
                WaterHeater(bus, appliance, WATER_HEATER_BASE);
            }

            callback(appliance);
        });
    };

    callback(bus);
};
