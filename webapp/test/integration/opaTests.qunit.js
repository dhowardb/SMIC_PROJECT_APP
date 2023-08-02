sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'projectsdemoapp/test/integration/FirstJourney',
		'projectsdemoapp/test/integration/pages/ProjectsList',
		'projectsdemoapp/test/integration/pages/ProjectsObjectPage',
		'projectsdemoapp/test/integration/pages/ObjectsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProjectsList, ProjectsObjectPage, ObjectsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('projectsdemoapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProjectsList: ProjectsList,
					onTheProjectsObjectPage: ProjectsObjectPage,
					onTheObjectsObjectPage: ObjectsObjectPage
                }
            },
            opaJourney.run
        );
    }
);