export const timeConverter = (video) => {

    const start = video.start;
    const duration = video.duration !== undefined ? video.duration : video.end;
  
    const startSeconds = Math.floor(start);
    const startMilliseconds = Math.floor((start - startSeconds) * 1000);
    const startHours = Math.floor(startSeconds / 3600);
    const startMinutes = Math.floor((startSeconds % 3600) / 60);
    const startSecondsFormatted = startSeconds % 60;
    const startTime = `${startHours.toString().padStart(2, '0')}:${startMinutes.toString().padStart(2, '0')}:${startSecondsFormatted.toString().padStart(2, '0')}.${startMilliseconds.toString().padStart(3, '0')}`;
    
    const durationSeconds = Math.floor(duration);
    const durationMilliseconds = Math.floor((duration - durationSeconds) * 1000);
    const durationHours = Math.floor(durationSeconds / 3600);
    const durationMinutes = Math.floor((durationSeconds % 3600) / 60);
    const durationSecondsFormatted = durationSeconds % 60;
    const durationTime = `${durationHours.toString().padStart(2, '0')}:${durationMinutes.toString().padStart(2, '0')}:${durationSecondsFormatted.toString().padStart(2, '0')}.${durationMilliseconds.toString().padStart(3, '0')}`;
  
    return {duration: durationTime, start: startTime}
  }