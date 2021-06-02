import os
import sys

correct = True
count = 0
total = 0

for folder, directories, files in os.walk('./src'): #checks through everything
    for file in files:
        if os.path.splitext(file.lower())[1] == '.ts':
            with open(os.path.join(folder, file), 'r', encoding='utf-8') as f:
                total += 1
                line = f.readline()
                if line != '// Teagan King 1365396\n':
                    print('1')
                    sys.exit(0)
                else:
                    count += 1
                    
print('0')
