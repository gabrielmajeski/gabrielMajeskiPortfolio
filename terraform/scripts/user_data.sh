#!/bin/bash
# Update and install required packages
yum update -y
amazon-linux-extras install docker -y
amazon-linux-extras install nginx1 -y

# Start and enable Docker
systemctl start docker
systemctl enable docker

# Pull Docker image from Docker Hub
docker pull gabrieru/portfolio

# Run Docker container
docker run -d --name portfolio -p 8080:8080 gabrieru/portfolio

# Configure Nginx
sudo tee /etc/nginx/conf.d/portfolio.conf > /dev/null <<'EOL'
server {
    listen 80;
    server_name localhost;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOL

# Start and enable Nginx
systemctl start nginx
systemctl enable nginx
