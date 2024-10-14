import os
class Config:
    SECRET_KEY = os.urandom(24)
    VIDEO_FOLDER = 'static/videos/'
