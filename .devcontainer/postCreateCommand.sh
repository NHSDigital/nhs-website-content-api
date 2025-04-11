#!/bin/bash

# Install JVM

sudo apt update
sudo apt install -y default-jdk

# Install poetry

#!/bin/bash
curl -sSL https://install.python-poetry.org | python3 -
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc

make install
echo "..Now you can 'make lint', 'make publish', 'npm run serve'"