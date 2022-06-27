import style from "./allSurveysScreen.style";
import {SafeAreaView, Text, View, FlatList, TextInput} from "react-native";
import {useState, useEffect} from "react";
import {AddFloatingActionButton, SurveyListItem, SelectNotificationButton} from "@@components";
import ChoiceModal from "../../components/modal/choiceModal/index";
import * as HttpClient from "../../shared/httpClient/httpClient";

export default function AllSurveysScreen({ navigation, route }) {

    let { userName } = route.params;

    let [surveys, setSurveys] = useState([]);
    let [surveyChoices, setSurveyChoices] = useState([]);
    let [modalVisible, setModalVisible] = useState(false);
    let [answerTextFieldValue, setAnswerTextFieldValue] = useState("");

    useEffect(() => {
        let refreshSurveys = () => HttpClient.getMeetingInformation().then((data) => {
            if (Object.keys(data ?? {}).length == 0)
                return;

            setSurveys(data.surveys);
            }).catch(console.error);
        refreshSurveys();
        let interval = setInterval(refreshSurveys, 2000);
        return () => clearInterval(interval);
    }, [userName])

    function handleAnswerSurvey(survey) {
        let choicesComponents = survey.choices.map(choice => {
            return <SelectNotificationButton
                white={true}
                title={choice}
                onPress={ () => { setModalVisible(false); HttpClient.submitAnswer(survey.id, [{ answer: choice, memberName: userName }]); }}/>
        })

        choicesComponents.push(
            <TextInput
                value={answerTextFieldValue}
                onChangeText={() => setAnswerTextFieldValue(answerTextFieldValue)}
                placeholder={"Other choice"}
                maxLength={300}
                style={style.answerTextField}
            />)
        setSurveyChoices(choicesComponents);
        setModalVisible(true);
    }

    function renderItem({ item }) {
        return <SurveyListItem
            survey={item}
            onPressInfo={() => navigation.navigate("EvaluateSurveyScreen", { initialSurvey: item })}
            onPressAnswer={() => handleAnswerSurvey(item)}
        />
    }

    return (
        <SafeAreaView style={style.container}>
            <ChoiceModal
                visible={modalVisible}
                backgroundClickDisabled={true}
                onRequestClose={() => { setModalVisible(false) }}
                title={"Submit answer"}
                choices={surveyChoices}/>
            <View style={style.headerContainer}>
                <Text style={style.headerText}>All Surveys</Text>
                <AddFloatingActionButton
                    style={style.addSurveyButton}
                    onPress={() => navigation.navigate("CreateSurveyScreen", { creatorName: userName })}
                />
            </View>

            <FlatList style={style.list} data={surveys} renderItem={renderItem} keyExtractor={survey => survey.id}/>
        </SafeAreaView>
    )
}
