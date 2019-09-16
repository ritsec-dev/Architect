from flask_restful import Resource


class Members(Resource):
    def get(self):
        return [{'name': 'chris'},
                {'name': 'bill'},
                {'name': 'robert'},
                {'name': 'jimbob'},
                {'name': 'realhuman'}]
