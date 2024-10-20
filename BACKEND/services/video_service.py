import os
import moviepy.editor as mp
import requests
from gtts import gTTS

def generate_voice(text, filename='voice.mp3'):
    """Generate voice for the given text using gTTS and save it as an MP3 file."""
    tts = gTTS(text, lang='en')
    tts.save(filename)

def download_video(video_url, index):
    """Download the video from the given URL and save it as an MP4 file."""
    file_name = f'video_{index}.mp4'
    response = requests.get(video_url)
    with open(file_name, 'wb') as f:
        f.write(response.content)
    return file_name

def fetch_videos(query, num_videos=2):
    api_key = 'H1Z6bHv1l3etmP1J3wQl9Q1l3JNaL5PoypRPlQ9YNu9klqVOjGOVFWys'
    url = f'https://api.pexels.com/videos/search?query={query}&per_page={num_videos}'
    headers = {'Authorization': api_key}
    response = requests.get(url, headers=headers)
    data = response.json()
    video_links = [video['video_files'][0]['link'] for video in data['videos']]
    
    video_files = []
    for i, link in enumerate(video_links):
        video_file = download_video(link, i)
        video_files.append(video_file)
    
    return video_files

def create_final_video(video_files, voice_file, duration, output_file='final_video.mp4'):
    """Concatenate the video clips and combine them with the generated voice."""
    clips = [mp.VideoFileClip(video_file).subclip(0, min(30, mp.VideoFileClip(video_file).duration)) for video_file in video_files]
    
    final_video = mp.concatenate_videoclips(clips, method="compose")

    audio = mp.AudioFileClip(voice_file)
    final_duration = duration * 60  

    if final_video.duration > final_duration:
        final_video = final_video.subclip(0, final_duration)
    
    if audio.duration > final_duration:
        audio = audio.subclip(0, final_duration)

    final_video = final_video.set_audio(audio)
    final_video.write_videofile(output_file, codec='libx264', audio_codec='aac', threads=4, preset='fast')

def generate_video_story(story, duration):
    """Generate a video story based on the provided text and duration."""
    generate_voice(story)

    print("Choose a topic for the video:")
    topics = [
        "Fantasy", "Adventure", "Mystery", "Fairy Tale",
        "Horror", "Romance", "Historical Fiction", "Science Fiction",
        "Fable", "Mythology", "Comedy", "Drama",
        "Thriller", "Superhero", "Children's Story"
    ]
    for i, topic in enumerate(topics, start=1):
        print(f"{i}. {topic}")

    video_topic_index = int(input("Enter the number corresponding to the topic: ")) - 1
    selected_topic = topics[video_topic_index % len(topics)]
    
    video_files = fetch_videos(selected_topic, num_videos=2) 
    create_final_video(video_files, 'voice.mp3', duration)

# New function for handling requests from the frontend
def handle_video_generation(prompt, duration):
    """Handle video generation requests from the frontend."""
    generate_video_story(prompt, duration)
