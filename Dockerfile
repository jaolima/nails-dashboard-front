FROM nginx:1.15

# Define workdir
WORKDIR /usr/share/nginx/html

# Install vim, nano
RUN apt update -y && apt -y install bc gdb elfutils binutils wget curl apache2-utils procps iputils-ping && rm -rf /var/lib/apt/lists/*
RUN apt update -y && apt-get install vim nano -y

# Remove default nginx static assets
RUN rm /etc/nginx/conf.d/default.conf
 
# Copy nginx conf from project to container
COPY ./src/services/nginx/nginx.conf /etc/nginx/conf.d/

COPY "build" "/usr/share/nginx/html/"