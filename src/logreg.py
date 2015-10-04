import numpy as np
import matplotlib.pyplot as plt
from sklearn import linear_model, datasets
import scrape

def load_data(filename):
    f = open(filename)

    X = []
    Y = []

    for line in f:
        
        tmp = line.split(';')
	tmp2 = tmp[0].split('[')[1].split(']')[0].split(',')
        tmpVals = []
	counter = 0
	for val in tmp2:
            if counter%3 != 1:
	        counter += 1
	        continue
            tmpVals.append(int(val))
	    counter += 1
	X.append(tmpVals)
	Y.append(tmp[1][1])

    return X,Y

# import some data to play with
iris = datasets.load_iris()
X = iris.data[:, :2]  # we only take the first two features.
Y = iris.target

h = .02  # step size in the mesh

logreg = linear_model.LogisticRegression(C=1e5)

rito = RitoPls()
x = rito.scrapeByMatchId('na', 1966959961)[0]

X,Y = load_data('../res/matches.txt')

# we create an instance of Neighbours Classifier and fit the data.
logreg.fit(X, Y)

Z = logreg.predict([[41, 80, 104, 111, 223, 1, 11, 40, 59, 96]])
ZZ = logreg.predict_proba([[41, 80, 104, 111, 223, 1, 11, 40, 59, 96]])
#print Z
print ZZ[0][0]

'''
# Plot the decision boundary. For that, we will assign a color to each
# point in the mesh [x_min, m_max]x[y_min, y_max].
x_min, x_max = X[:, 0].min() - .5, X[:, 0].max() + .5
y_min, y_max = X[:, 1].min() - .5, X[:, 1].max() + .5
xx, yy = np.meshgrid(np.arange(x_min, x_max, h), np.arange(y_min, y_max, h))
Z = logreg.predict(np.c_[xx.ravel(), yy.ravel()])

# Put the result into a color plot
Z = Z.reshape(xx.shape)
plt.figure(1, figsize=(4, 3))
plt.pcolormesh(xx, yy, Z, cmap=plt.cm.Paired)

# Plot also the training points
plt.scatter(X[:, 0], X[:, 1], c=Y, edgecolors='k', cmap=plt.cm.Paired)
plt.xlabel('Sepal length')
plt.ylabel('Sepal width')

plt.xlim(xx.min(), xx.max())
plt.ylim(yy.min(), yy.max())
plt.xticks(())
plt.yticks(())

plt.show()
'''


