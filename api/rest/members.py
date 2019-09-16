from flask_restful import Resource


class Members(Resource):
    def __init__(self):
        self.MEMBER_DATA = [{'name': 'chris', 'email': 'chris@rit.edu', 'team': 'Black Team', 'role': 'CTF Lead'},
                {'name': 'sean', 'email': 'sean@rit.edu', 'team': 'Red Team', 'role': 'Hacker'},
                {'name': 'jack', 'email': 'jack@rit.edu', 'team': 'White Team', 'role': 'Helper'},
                {'name': 'quinten', 'email': 'quinten@rit.edu', 'team': 'Black Team', 'role': 'Competition Architect'},
                {'name': 'josh', 'email': 'josh@rit.edu', 'team': 'Blue Team 1', 'role': 'Team Lead'}]

    def get(self):
        return self.MEMBER_DATA

    def delete(self):
        new_data = []
        for member in self.MEMBER_DATA:
            if member.get("name") != "sean":
                new_data.append(member)

        return self.MEMBER_DATA
