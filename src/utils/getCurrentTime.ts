export function getCurrentTime(): string {
    // Create a new Date object
    const now: Date = new Date();

    // Get hours, minutes, and seconds
    let hours: number | string = now.getHours();
    let minutes: number | string = now.getMinutes();
    let seconds: number | string = now.getSeconds();

    // Format hours, minutes, and seconds with leading zeros for single digits
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    // Combine formatted parts with colons
    const formattedTime: string = `${hours}:${minutes}:${seconds}`;

    return formattedTime;
}



