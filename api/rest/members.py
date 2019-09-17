from flask_restful import Resource


class Members(Resource):
    def get(self):
        return [{'name': 'chris', 'email': 'chris@rit.edu', 'team': 'Black Team', 'role': 'CTF Lead'},
                {'name': 'sean', 'email': 'sean@rit.edu', 'team': 'Red Team', 'role': 'Hacker'},
                {'name': 'jack', 'email': 'jack@rit.edu', 'team': 'White Team', 'role': 'Helper'},
                {'name': 'quinten', 'email': 'quinten@rit.edu', 'team': 'Black Team', 'role': 'Competition Architect'},
                {'name': 'josh', 'email': 'josh@rit.edu', 'team': 'Blue Team Fuck', 'role': 'Team Lead'}]
