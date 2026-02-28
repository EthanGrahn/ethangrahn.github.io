# [Choice] Node.js version: 20, 18, 14
ARG VARIANT=20
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

RUN su node -c "umask 0002 && npm install -g http-server @vue/cli @vue/cli-service-global"
WORKDIR /app

EXPOSE 8080
EXPOSE 5173

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>
