package com.example.cs3354_vt_demo;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.Button;

public class Dashboard extends AppCompatActivity {

    private Button allTransactions, addCard, report, wallet, banks, settings;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        initialize();
    }

    public void initialize()
    {
        //Buttons
        allTransactions = findViewById(R.id.alltransactions_button);
        addCard = findViewById(R.id.addcard_button);
        report = findViewById(R.id.report_button);
        wallet = findViewById(R.id.wallet_button);
        banks = findViewById(R.id.banks_button);
        settings = findViewById(R.id.settings_button);
    }
}