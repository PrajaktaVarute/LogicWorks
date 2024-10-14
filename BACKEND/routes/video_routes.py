from flask import Blueprint, request, jsonify
from services.video_service import handle_video_generation

video_blueprint = Blueprint('video', __name__)

@video_blueprint.route('/generate', methods=['POST'])
def generate():
    data = request.json
    story = data.get('prompt')
    duration = data.get('duration', 1)  
    handle_video_generation(story, duration)
    return jsonify({"message": "Video generation started."})
