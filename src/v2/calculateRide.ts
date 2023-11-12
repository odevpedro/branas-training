// @ts-nocheck
// calculate ride
function isOvernight(date){
	return date.getHours() >= 22 || date.getHours() <= 6;
}

function isSunday(date){
	return date.getDay() == 0
}

export function calculateRide(segments) {
	let fare = 0;
	for (const segment of segments) {
		if (segment.distance != null && segment.distance != undefined && typeof segment.distance === "number" && segment.distance > 0) {
			if (segment.date != null && segment.date != undefined && segment.date instanceof Date && segment.date.toString() !== "Invalid Date") {
				// overnight
			
				if (isOvernight(segment.date)) {
				
					const notSunday = segment.date.getDay() !== 0
					if (!isSunday(segment.date)) {
						fare += segment.distance * 3.90;
					
					} else {
						fare += segment.distance * 5;
					}
				} else {
					
					if (isSunday(segment.date)) {
						fare += segment.distance * 2.9;
					} else {
						fare += segment.distance * 2.10;
					}
				}
			} else {
				return -2;
			}
		} else {
			return -1;
		}
	}
	if (fare < 10) {
		return 10;
	} else {
		return fare;
	}
}